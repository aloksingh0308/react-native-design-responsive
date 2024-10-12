// __tests__/designResponsive.test.ts
import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";
import {
  screenWidth,
  screenHeight,
  DesignHeight,
  DesignWidth,
  normalize,
  vw,
  vh,
  isTablet,
  getStatusBarHeight,
} from "../src/index";

describe("Design Responsive Module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("screenWidth should be 375", () => {
    const width = Dimensions.get("window").width;
    expect(screenWidth).toBe(width);
  });

  test("screenHeight should be 812", () => {
    const height = Dimensions.get("window").height;
    expect(screenHeight).toBe(height);
  });

  test("DesignWidth should be 375", () => {
    expect(DesignWidth).toBe(375);
  });

  test("DesignHeight should be 812", () => {
    expect(DesignHeight).toBe(812);
  });

  test("isTablet should return true for iPad", () => {
    expect(isTablet()).toBe(true);
  });

  test("normalize should adjust size for tablets", () => {
    const size = 10;
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
      Dimensions.get("window");
    const expected = PixelRatio.roundToNearestPixel(
      size * Math.min(SCREEN_WIDTH / DesignWidth, SCREEN_HEIGHT / DesignHeight)
    );
    expect(normalize(size)).toBe(expected);
  });

  test("vw should calculate width percentage correctly", () => {
    const width = 50;
    const percent = (width / DesignWidth) * 100;
    const expected = PixelRatio.roundToNearestPixel(
      (screenWidth * percent) / 100
    ); // Raw calculation
    expect(vw(width)).toBe(expected);
  });

  test("vh should calculate height percentage correctly", () => {
    const height = 50;
    const percent = (height / DesignHeight) * 100;
    const expected = PixelRatio.roundToNearestPixel(
      (screenHeight * percent) / 100
    );
    expect(vh(height)).toBe(expected);
  });

  test("get sttaus bar height for each devices correctly", () => {
    let batHeight=0
    if (Platform.OS === "android") {
      batHeight= StatusBar.currentHeight || 0;
    }
    if (Platform.OS === "ios") {
      const { height: windowHeight, width: windowWidth } =
        Dimensions.get("window");
      const isIPhoneWithNotch = windowHeight >= 812 || windowWidth >= 812;
      batHeight= isIPhoneWithNotch ? 44 : 20;
    }
    expect(getStatusBarHeight()).toBe(batHeight);
  });
});
