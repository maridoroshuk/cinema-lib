import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inria Sans';
    src: local('Inria Sans'), url('../styles/fonts/InriaSans_Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src:  local('Inter'), url('../styles/fonts/Inter_Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src:  local('Inter'), url('../styles/fonts/Inter_Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito Sans';
    src:  local('Nunito Sans'), url('../styles/fonts/Nunito_Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito Sans';
    src:  local('Nunito Sans'), url('../styles/fonts/Nunito_Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src:  local('Poppins'), url('../styles/fonts/Poppins_Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    max-width: 1920px;
    overflow-x: hidden;
    margin: 0 auto;
  }
  html {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
