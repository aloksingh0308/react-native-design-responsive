module.exports = {
    presets: [
      'module:metro-react-native-babel-preset', // Default preset for React Native
      '@babel/preset-typescript', // Optional: Only if you're using TypeScript
    ],
    plugins: [
      // Ensure the "loose" option is the same for these plugins
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ],
  };
  