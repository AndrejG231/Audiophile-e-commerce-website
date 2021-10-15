import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import Router from "./Router";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./data/theme";
import { Container, Provider, Subscribe } from "unstated";
import { ResizeStateChanger } from "./states/ScreenQuery";

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

  a {
    text-decoration: none;
    outline: none;
    border: none;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyle />
        <Router />
        <ResizeStateChanger />
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
