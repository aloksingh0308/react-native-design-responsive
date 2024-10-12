"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// __tests__/designResponsive.test.ts
const react_native_1 = require("react-native");
const index_1 = require("../src/index");
describe("Design Responsive Module", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("screenWidth should be 375", () => {
        const width = react_native_1.Dimensions.get("window").width;
        expect(index_1.screenWidth).toBe(width);
    });
    test("screenHeight should be 812", () => {
        const height = react_native_1.Dimensions.get("window").height;
        expect(index_1.screenHeight).toBe(height);
    });
    test("DesignWidth should be 375", () => {
        expect(index_1.DesignWidth).toBe(375);
    });
    test("DesignHeight should be 812", () => {
        expect(index_1.DesignHeight).toBe(812);
    });
    test("isTablet should return true for iPad", () => {
        expect((0, index_1.isTablet)()).toBe(true);
    });
    test("normalize should adjust size for tablets", () => {
        const size = 10;
        const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = react_native_1.Dimensions.get("window");
        const expected = react_native_1.PixelRatio.roundToNearestPixel(size * Math.min(SCREEN_WIDTH / index_1.DesignWidth, SCREEN_HEIGHT / index_1.DesignHeight));
        expect((0, index_1.normalize)(size)).toBe(expected);
    });
    test("vw should calculate width percentage correctly", () => {
        const width = 50;
        const percent = (width / index_1.DesignWidth) * 100;
        const expected = react_native_1.PixelRatio.roundToNearestPixel((index_1.screenWidth * percent) / 100); // Raw calculation
        expect((0, index_1.vw)(width)).toBe(expected);
    });
    test("vh should calculate height percentage correctly", () => {
        const height = 50;
        const percent = (height / index_1.DesignHeight) * 100;
        const expected = react_native_1.PixelRatio.roundToNearestPixel((index_1.screenHeight * percent) / 100);
        expect((0, index_1.vh)(height)).toBe(expected);
    });
    test("get sttaus bar height for each devices correctly", () => {
        let batHeight = 0;
        if (react_native_1.Platform.OS === "android") {
            batHeight = react_native_1.StatusBar.currentHeight || 0;
        }
        if (react_native_1.Platform.OS === "ios") {
            const { height: windowHeight, width: windowWidth } = react_native_1.Dimensions.get("window");
            const isIPhoneWithNotch = windowHeight >= 812 || windowWidth >= 812;
            batHeight = isIPhoneWithNotch ? 44 : 20;
        }
        expect((0, index_1.getStatusBarHeight)()).toBe(batHeight);
    });
});
