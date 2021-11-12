import { Container } from "unstated";
import { inputIdentifiers } from "../constants";
import { routes } from "../Router";
import checkoutInputChceck from "../util/checkoutInputsCheck";

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

const defaultTextInputs = inputIdentifiers.reduce(
  (acc, val) => ({ ...acc, [val]: { error: "", value: "" } }),
  {}
);


class Checkout extends Container<props> {
  state = {
    textInputs: defaultTextInputs,
    boolInputs: { formPaymentMethod: "select-money" },
  };

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

  checkAll = (navigator: (path: string) => void) => {
    const newInputData: { [key: string]: { value: string; error: string } } =
      {};

    // Check all the input data for errors - save new errors outside of state
    for (const key of Object.keys(this.state.textInputs)) {
      newInputData[key] = {
        value: this.state.textInputs[key].value,
        error: "",
      };
      checkoutInputChceck(
        key,
        this.state.textInputs[key].value,
        (error: string) => {
          newInputData[key].error = error;
        }
      );
      // Insted of setting error to state, modify newInputData object
    }

    for (const key of Object.keys(newInputData)) {
      if (newInputData[key].error) {
        // Every input element should be rendered with its identifier id
        const el = document.getElementById(`${key}-input`);
        if (el) {
          // Scroll and focus first invalid field
          window.scrollTo({ top: el.offsetTop });
          el.focus();
          // Load all errors from new object into state
          return this.setState((state) => ({
            textInputs: { ...state.textInputs, ...newInputData },
          }));
        }
      }
    }

    // proceed if no errors occured
    return navigator(routes.finishedOrder);
  };
}

export default Checkout;
