import { Container } from "unstated";

type props = {
  textInputs: {
    // key - identifier of input, value and errors of input and checks
    [key in string]: {
      value: string;
      error: string;
    };
  };
  boolInputs: {
    [key in string]: string;
    // key refers to group of inputs, value - string refers to identifier of input
  };
};

class Checkout extends Container<props> {
  state = { textInputs: {}, boolInputs: { formPaymentMethod: "select-money" } };

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

  select = (group: string, identifier: string) => {
    this.setState((state) => ({
      boolInputs: {
        ...state.boolInputs,
        [group]: identifier,
      },
    }));
  };
}

export default Checkout;
