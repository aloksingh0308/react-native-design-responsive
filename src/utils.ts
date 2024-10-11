import { Dimensions, PixelRatio, Platform } from "react-native";

// Get the screen width and height of the device
export const screenWidth: number = Dimensions.get("window").width;
export const screenHeight: number = Dimensions.get("window").height;

// Define the design width and height based on your design layout (e.g., 375x812 for iPhone X)
export const DesignHeight: number = 812;
export const DesignWidth: number = 375;

// Determine the device's screen scale
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale: number = SCREEN_WIDTH / DesignWidth;
const heightScale: number = SCREEN_HEIGHT / DesignHeight;

// Handle tablet-specific scaling logic
export const isTablet = (): boolean => {
  const aspectRatio = SCREEN_HEIGHT / SCREEN_WIDTH;
  const isPad =
  Platform.OS === "ios" ? SCREEN_WIDTH >= 768 && aspectRatio <= 1.6 : false;
  return isPad || (SCREEN_WIDTH >= 768 && aspectRatio <= 1.6);
};

// Unified normalize function with device check (tablet vs. mobile)
export function normalize(size: number): number {
  // For tablets, adjust the scaling based on both width and height
  if (isTablet()) {
    return PixelRatio.roundToNearestPixel(size * Math.min(scale, heightScale));
  }
  // For mobile devices, use the standard width-based scaling
  return PixelRatio.roundToNearestPixel(size * scale);
}

// Calculate width based on percentage of design width (vw equivalent)
export const vw = (width: number): number => {
  const percent = (width / DesignWidth) * 100;
  return PixelRatio.roundToNearestPixel((screenWidth * percent) / 100);
};

// Calculate height based on percentage of design height (vh equivalent)
export const vh = (height: number): number => {
  const percent = (height / DesignHeight) * 100;
  return PixelRatio.roundToNearestPixel((screenHeight * percent) / 100);
};
