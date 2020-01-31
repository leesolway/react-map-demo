import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }
`;

export default GlobalStyles;
