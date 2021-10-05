import React from "react";
import ReactDOM from "react-dom";

import data from "./data/products.json";

const App = () => {
  return <img src={data[0].categoryImage.desktop}></img>;
};

ReactDOM.render(<App />, document.getElementById("root"));
