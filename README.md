
# react-native-design-responsive

react-native-design-responsive is a simple utility library to make UI design responsive across different devices in React Native. It provides an easy way to scale components based on the screen's width, height, and font size. With this library, you can ensure a consistent and adaptive UI for iOS, Android, and tablets.

Installation

Run yarn add react-native-design-responsive


## Usage :
  1. Installation 

    npm install react-native-design-responsive

  2. Functions:
    vw(percentage) - Returns a value based on the width of the device's screen.
    vh(percentage) - Returns a value based on the height of the device's screen.
    normalize(size) - Normalizes the font size to maintain consistency across different screen sizes.

## Example :

import { vw, vh, normalize } from 'react-native-design-responsive';

const styles = StyleSheet.create({
  container: {
    width: vw(90), // 90% of screen width
    height: vh(50), // 50% of screen height
  },
  text: {
    fontSize: normalize(16), // Adjusts font size
  },
});
