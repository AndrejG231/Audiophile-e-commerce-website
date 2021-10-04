import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props: any) => {
  const state = useState(0);

  return (
    <div>
      <button onClick={() => state[1](state[0] + 1)}>{state[0]}</button>ello!
      {props.children}
    </div>
  );
};

const Text = () => {
  return <div>Helo</div>;
};

ReactDOM.render(
  <App>
    <Text />
  </App>,
  document.getElementById("root")
);
