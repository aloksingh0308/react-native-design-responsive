declare module "react-native-design-responsive" {
  export function vw(value: number): number;
  export function vh(value: number): number;
  export function normalize(value: number): number;
  export declare const getStatusBarHeight: () => number;
}
