import 'styled-components';

declare module 'styled-components' {
  export interface ISelectedTheme {
    colors: {
      [key: string]: string;
    };
  }

  export interface DefaultTheme {
    colors: ISelectedTheme['colors'];
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
    positions: {
      [index: string]: string;
    };
    screenSizes: {
      [index: number]: number;
    };
  }
}
