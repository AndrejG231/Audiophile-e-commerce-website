import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import Router from "./Router";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./data/theme";
import { Container, Provider, Subscribe } from "unstated";

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

// Images context
type query = "mobile" | "tablet" | "desktop";

const getScreenQuery = (): query => {
  const size = window.innerWidth;
  if (size < theme.sizes.tablet) {
    return "mobile";
  }
  if (size < theme.sizes.desktop) {
    return "tablet";
  }
  return "desktop";
};

export class ScreenQuery extends Container<{ mediaQuery: query }> {
  state = { mediaQuery: getScreenQuery() };
  reset = () => {
    const newMediaQuery = getScreenQuery();
    if (this.state.mediaQuery !== newMediaQuery) {
      this.setState({ mediaQuery: newMediaQuery });
    }
  };
}

export const ResizeStateChanger = () => {
  const Changer = ({ query }: any) => {
    useEffect(() => {
      window.addEventListener("resize", () => {
        query.reset();
      });
      return () => window.removeEventListener("resize", () => query.reset());
    }, []);

    return null;
  };

  return (
    <Subscribe to={[ScreenQuery]}>
      {(query) => <Changer query={query} />}
    </Subscribe>
  );
};

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
