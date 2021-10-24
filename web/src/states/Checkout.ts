import { Container } from "unstated";

type props = {
  textInputs: {
    [key in string]: {
      value: string;
      error: string;
    };
  };
};

class Checkout extends Container<props> {
  state = { textInputs: {} };

  setValue = (id: string, value: string) =>
    this.setState((state) => ({
      textInputs: {
        ...state.textInputs,
        [id]: {
          value,
          error: "",
        },
      },
    }));

  setError = (id: string, error: string) =>
    this.setState((state) => ({
      textInputs: {
        ...state.textInputs,
        [id]: {
          value: state.textInputs[id] ? state.textInputs[id].value : "",
          error,
        },
      },
    }));
}

export default Checkout;
