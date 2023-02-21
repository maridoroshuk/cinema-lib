import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@1,300&family=Inter:wght@400;700&family=Nunito+Sans:wght@400;700&family=Poppins:wght@300&display=swap');

  @font-face {
    font-family: "Inria Sans";
    src: url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@1,300&display=swap');
  }
  @font-face {
    font-family: "Inter";
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  }
  @font-face {
    font-family: "Nunito Sans";
    src: url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');
  }
  @font-face {
    font-family: "Poppins";
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
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
