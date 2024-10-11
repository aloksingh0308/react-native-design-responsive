"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vh = exports.vw = exports.isTablet = exports.DesignWidth = exports.DesignHeight = exports.screenHeight = exports.screenWidth = void 0;
exports.normalize = normalize;
const react_native_1 = require("react-native");
// Get the screen width and height of the device
exports.screenWidth = react_native_1.Dimensions.get("window").width;
exports.screenHeight = react_native_1.Dimensions.get("window").height;
// Define the design width and height based on your design layout (e.g., 375x812 for iPhone X)
exports.DesignHeight = 812;
exports.DesignWidth = 375;
// Determine the device's screen scale
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = react_native_1.Dimensions.get("window");
const scale = SCREEN_WIDTH / exports.DesignWidth;
const heightScale = SCREEN_HEIGHT / exports.DesignHeight;
// Handle tablet-specific scaling logic
const isTablet = () => {
    const aspectRatio = SCREEN_HEIGHT / SCREEN_WIDTH;
    const isPad = react_native_1.Platform.OS === "ios" ? SCREEN_WIDTH >= 768 && aspectRatio <= 1.6 : false;
    return isPad || (SCREEN_WIDTH >= 768 && aspectRatio <= 1.6);
};
exports.isTablet = isTablet;
// Unified normalize function with device check (tablet vs. mobile)
function normalize(size) {
    // For tablets, adjust the scaling based on both width and height
    if ((0, exports.isTablet)()) {
        return react_native_1.PixelRatio.roundToNearestPixel(size * Math.min(scale, heightScale));
    }
    // For mobile devices, use the standard width-based scaling
    return react_native_1.PixelRatio.roundToNearestPixel(size * scale);
}
// Calculate width based on percentage of design width (vw equivalent)
const vw = (width) => {
    const percent = (width / exports.DesignWidth) * 100;
    return react_native_1.PixelRatio.roundToNearestPixel((exports.screenWidth * percent) / 100);
};
exports.vw = vw;
// Calculate height based on percentage of design height (vh equivalent)
const vh = (height) => {
    const percent = (height / exports.DesignHeight) * 100;
    return react_native_1.PixelRatio.roundToNearestPixel((exports.screenHeight * percent) / 100);
};
exports.vh = vh;
