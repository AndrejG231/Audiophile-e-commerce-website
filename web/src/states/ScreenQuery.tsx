import React from "react";
import { useEffect } from "react";
import { Container, Subscribe } from "unstated";
import theme from "../data/theme";

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
