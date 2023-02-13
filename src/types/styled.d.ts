import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      defaultBlack: string;
      pageBackground: string;
      defaultWhite: string;
      gold: string;
      grey: string;
      darkGrey: string;
      darkGrey2: string;
      lightGrey: string;
      lightGrey2: string;
      reviewsBackground: string;
      filmGradient: string;
      purple: string;
      darkBlue: string;
      cyanBlue: string;
      darkRed: string;
      tundora: string;
      greyTransparent: string;
      lightGreyTransparent: string;
      customTextShadow: string;
      transparent: string;
      hallBackground: string;
      lemon: string;
      yellowGreen: string;
      melon: string;
      purple: string;
      transparent: string;
      hallBackground: string;
      lemon: string;
      yellowGreen: string;
      melon: string;
    };
    fontFamily: {
      Inria: string;
      Inter: string;
      Nunito: string;
      Poppins: string;
    };
    positions: {
      absolute: string;
      relative: string;
      fixed: string;
      sticky: string;
    };
    sizes: {
      width: { [index: number]: number };
      height: { [index: number]: number };
      gap: { [index: number]: number };
      borderRadius: { [index: number]: number };
      fontSize: { [index: number]: number };
      fontWeight: { [index: number]: number };
      lineHeight: { [index: number]: number };
    };
    spaces: {
      [index: number]: number;
    };
    zIndex: {
      [index: number]: number;
    };
    screenSizes: {
      [index: number]: number;
    };
    positions: {
      [index: string]: string;
    };
    screenSizes: {
      [index: number]: number;
    };
  }
}
