// jest.config.js
module.exports = {
  preset: "react-native",
  testEnvironment: "jsdom", // Use jsdom as the test environment
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/e2e/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|your-library-name)/)",
  ],
};
