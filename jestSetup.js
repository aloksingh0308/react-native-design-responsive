// src/__mocks__/jestSetup.js
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native", () => {
  const ActualReactNative = jest.requireActual("react-native");

  return {
    Dimensions: {
      get: jest.fn().mockImplementation((dim) => {
        return {
          window: {
            width: 768, // Width of iPad
            height: 1024, // Height of iPad
          },
        }[dim];
      }),
    },
    PixelRatio: {
      roundToNearestPixel: jest.fn((value) => Math.round(value)),
    },
    Platform: {
      OS: "ios",
    },
    NativeModules: {
      ...ActualReactNative.NativeModules,
      SettingsManager: {
        getConstants: jest.fn(() => ({
          settings: {}, // Mock settings
        })),
      },
      // Add other modules as needed
      SoundManager: {},
      NativeAnimatedModule: {},
      ModalManager: {},
      ActionSheetManager: {},
      PermissionsAndroid: {},
    },
  };
});

// Mock TurboModuleRegistry if needed
jest.mock("react-native/Libraries/TurboModule/TurboModuleRegistry", () => {
  const turboModuleRegistry = jest.requireActual(
    "react-native/Libraries/TurboModule/TurboModuleRegistry"
  );
  return {
    ...turboModuleRegistry,
    getEnforcing: (name) => {
      if (name === "SettingsManager") {
        return { getConstants: jest.fn(() => ({})) };
      }
      return turboModuleRegistry.getEnforcing(name);
    },
  };
});
