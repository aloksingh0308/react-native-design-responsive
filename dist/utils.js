import { Dimensions, PixelRatio, Platform } from "react-native";
// Get the screen width and height of the device
export var screenWidth = Dimensions.get("window").width;
export var screenHeight = Dimensions.get("window").height;
// Define the design width and height based on your design layout (e.g., 375x812 for iPhone X)
export var DesignHeight = 812;
export var DesignWidth = 375;
// Determine the device's screen scale
var _a = Dimensions.get("window"), SCREEN_WIDTH = _a.width, SCREEN_HEIGHT = _a.height;
var scale = SCREEN_WIDTH / DesignWidth;
var heightScale = SCREEN_HEIGHT / DesignHeight;
// Handle tablet-specific scaling logic
export var isTablet = function () {
    var aspectRatio = SCREEN_HEIGHT / SCREEN_WIDTH;
    var isPad = Platform.OS === "ios" ? SCREEN_WIDTH >= 768 && aspectRatio <= 1.6 : false;
    return isPad || (SCREEN_WIDTH >= 768 && aspectRatio <= 1.6);
};
// Unified normalize function with device check (tablet vs. mobile)
export function normalize(size) {
    // For tablets, adjust the scaling based on both width and height
    if (isTablet()) {
        return PixelRatio.roundToNearestPixel(size * Math.min(scale, heightScale));
    }
    // For mobile devices, use the standard width-based scaling
    return PixelRatio.roundToNearestPixel(size * scale);
}
// Calculate width based on percentage of design width (vw equivalent)
export var vw = function (width) {
    var percent = (width / DesignWidth) * 100;
    return PixelRatio.roundToNearestPixel((screenWidth * percent) / 100);
};
// Calculate height based on percentage of design height (vh equivalent)
export var vh = function (height) {
    var percent = (height / DesignHeight) * 100;
    return PixelRatio.roundToNearestPixel((screenHeight * percent) / 100);
};
