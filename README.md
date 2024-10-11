# react-native-design-responsive

A simple React Native library to help with responsive design using functions like `vw` (viewport width), `vh` (viewport height), and `normalize` for scaling text and other elements across different screen sizes.

## Installation

Install the library using npm or yarn:

```bash
npm install react-native-design-responsive

```

or

```bash
yarn add react-native-design-responsive
```

# Usage

Once installed, you can import the functions vw, vh, and normalize from the package and use them in your components to make your UI responsive.

```javascript
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { vw, vh, normalize } from "react-native-design-responsive";

const ExampleComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responsive Design Example</Text>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: vw(5), // Padding as 5% of the screen width
  },
  title: {
    fontSize: normalize(20), // Scaled font size based on screen size
    marginBottom: vh(2), // Margin as 2% of the screen height
  },
  box: {
    width: vw(50), // Box width is 50% of the screen width
    height: vh(30), // Box height is 30% of the screen height
    backgroundColor: "skyblue",
  },
});

export default ExampleComponent;
```

```bash
Functions
vw(width: number): number
Returns the calculated width as a percentage of the device's screen width, similar to the CSS vw unit.

vh(height: number): number
Returns the calculated height as a percentage of the device's screen height, similar to the CSS vh unit.

normalize(size: number): number
Normalizes the provided size based on the device's screen size, scaling the size proportionally for both mobile and tablet devices.

```
