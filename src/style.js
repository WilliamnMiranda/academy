import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    text-decoration: none;
    list-style: none;
  }
  input,button {
    outline: none;
    border: none;
  }
`
 
export default GlobalStyle;