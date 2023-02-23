import { DefaultTheme, ISelectedTheme } from 'styled-components';

export const darkTheme: ISelectedTheme = {
  colors: {
    neutral1000: '#ffffff',
    neutral900: '#90908d',
    neutral000: '#000000',
    gold: '#D98639',
    neutral050: '#424242',
    neutral700: '#cecece',
    neutral800: '#e3e3e3',
    neutral300: '#767678E5',
    neutral400: '#898987',
    reviewsBackground: '#4f4f4f4d',
    filmGradient: '#9a9bcf8f',
    primary800: '#e1e0d8',
    primary400: '#e7880d',
    danger: '#38c1e2',
    action500: '#9a9bcf8f',
    neutral500: '#b7b8b8',
    neutral050Transparent: '#0000008c',
    neutral300Transparent: '#d9d9d933',
    customTextShadow: '#00000040',
    transparent: 'transparent',
    hallBackground: '#5a5a5ccc',
    customBackground: '#ffffff',
  },
};
export const lightTheme: ISelectedTheme = {
  colors: {
    neutral1000: '#000000',
    neutral900: '#1E1F27',
    neutral000: '#FFFFFF',
    gold: '#D98639',
    neutral050: '#BDBDBD',
    neutral700: '#313131',
    neutral800: '#1C1C1C',
    neutral300: '#767678E5',
    neutral400: '#767678',
    reviewsBackground: '#4f4f4f4d',
    filmGradient: '#9a9bcf8f',
    primary800: '#1e1f27',
    primary400: '#1877F2',
    danger: '#C73E1D',
    action500: '#4B2D67',
    neutral500: '#484747',
    neutral050Transparent: '#0000008c',
    neutral300Transparent: '#d9d9d933',
    customTextShadow: '#00000040',
    transparent: 'transparent',
    hallBackground: '#5a5a5ccc',
    customBackground: '#ffffff',
  },
};

export const theme: DefaultTheme = {
  colors: lightTheme.colors || darkTheme.colors,
  fontFamily: {
    Inria: `'Inria Sans', sans-serif`,
    Inter: `'Inter', sans-serif`,
    Nunito: `'Nunito Sans', sans-serif`,
    Poppins: `'Poppins', sans-serif`,
  },
  positions: {
    absolute: 'absolute',
    relative: 'relative',
    fixed: 'fixed',
    sticky: 'sticky',
  },
  sizes: {
    width: {
      5: 5,
      10: 10,
      15: 15,
      20: 20,
      25: 25,
      30: 30,
      35: 35,
      40: 40,
      45: 45,
      50: 50,
      55: 55,
      60: 60,
      65: 65,
      70: 70,
      75: 75,
      80: 80,
      85: 85,
      90: 90,
      95: 95,
      100: 100,
      115: 115,
      125: 125,
      130: 130,
      135: 135,
      145: 145,
      170: 170,
      175: 175,
      220: 220,
      225: 225,
      250: 250,
      255: 255,
      280: 280,
      340: 340,
      370: 370,
      400: 400,
      420: 420,
      450: 450,
      500: 500,
      590: 590,
      600: 600,
      630: 630,
      650: 650,
      680: 680,
      800: 800,
      850: 850,
    },
    height: {
      2: 2,
      5: 5,
      10: 10,
      15: 15,
      20: 20,
      25: 25,
      30: 30,
      35: 35,
      40: 40,
      45: 45,
      50: 50,
      55: 55,
      60: 60,
      65: 65,
      70: 70,
      75: 75,
      80: 80,
      85: 85,
      90: 90,
      95: 95,
      100: 100,
      110: 110,
      125: 125,
      130: 130,
      180: 180,
      200: 200,
      480: 480,
      500: 500,
      535: 535,
      700: 700,
    },
    gap: {
      5: 5,
      10: 10,
      15: 15,
      20: 20,
      25: 25,
      30: 30,
      35: 35,
      40: 40,
      45: 45,
      50: 50,
      55: 55,
      60: 60,
      65: 65,
      70: 70,
      75: 75,
      80: 80,
      85: 85,
      90: 90,
      95: 95,
      100: 100,
    },
    borderRadius: {
      5: 5,
      10: 10,
      15: 15,
      20: 20,
      25: 25,
      30: 30,
      35: 35,
      100: 100,
    },
    fontSize: {
      10: 10,
      14: 14,
      15: 15,
      16: 16,
      18: 18,
      20: 20,
      24: 24,
      25: 25,
      30: 30,
      32: 32,
      36: 36,
      38: 38,
      40: 40,
      42: 42,
      46: 46,
      48: 48,
      50: 50,
      55: 55,
      57: 57,
    },
    fontWeight: { 300: 300, 400: 400, 500: 500, 600: 600, 700: 700, 800: 800 },
    lineHeight: {
      22: 22,
      24: 24,
      28: 28,
      30: 30,
      33: 33,
      36: 36,
      40: 40,
      44: 44,
      48: 48,
      54: 54,
      56: 56,
      60: 60,
      63: 63,
      65: 65,
      70: 70,
      72: 72,
      83: 83,
      112: 112,
    },
  },
  spaces: {
    1: 1,
    2: 2,
    3: 3,
    5: 5,
    10: 10,
    15: 15,
    20: 20,
    25: 25,
    30: 30,
    35: 35,
    40: 40,
    45: 45,
    50: 50,
    55: 55,
    60: 60,
    65: 65,
    70: 70,
    75: 75,
    80: 80,
    85: 85,
    90: 90,
    95: 95,
    100: 100,
    105: 105,
    110: 110,
    115: 115,
    120: 120,
    125: 125,
    130: 130,
    135: 135,
    140: 140,
    145: 145,
    150: 150,
    155: 155,
    160: 165,
    170: 170,
    175: 175,
    180: 180,
    185: 185,
    190: 190,
    200: 200,
    205: 205,
    210: 210,
    215: 215,
    220: 220,
    225: 225,
    230: 230,
    235: 235,
    240: 240,
  },

  zIndex: {
    1000: 1000,
    2000: 2000,
    3000: 3000,
    5000: 5000,
  },

  screenSizes: {
    320: 320,
    375: 375,
    425: 425,
    600: 600,
    768: 768,
    860: 860,
    1024: 1024,
    1140: 1140,
    1440: 1440,
    1920: 1920,
    2560: 2560,
  },
};
