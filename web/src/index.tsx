import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./data/theme";

// Main theme based on design system
const GlobalStyle = createGlobalStyle`
/* Body */
  body, *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  /* Default texts */
  blockquote, dl, dd, h1, h2, h3, h4,
  h5, h6, hr, figure, p, pre {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }
  
  /* Unstyled lists */
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
/* Unstyled buttons */
  button {
    border: none;
    outline: none;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById("root")
);
