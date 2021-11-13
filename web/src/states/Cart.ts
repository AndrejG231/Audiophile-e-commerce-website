import { Container } from "unstated";
import products from "../data/products";

type state = {
  cart: {
    // Key is product slug
    [key in string]: {
      quantity: number;
    };
  };
};

// Intializing and testing local storage
const storage = window.localStorage;

const testStorage = () => {
  try {
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

const storageAvailable = testStorage();

// Transmition from state to storage and back
const stateToStorage = (state: state) => {
  if (storageAvailable) {
    for (const key in products) {
      // Map every available product so all wrong data get erased
      storage.setItem(`cart--${key}`, `${state.cart[key]?.quantity || 0}`);
    }
  }
};

const stateFromStorage = (): state => {
  const cart: { [key in string]: { quantity: number } } = {};
  if (storageAvailable) {
    for (const key in products) {
      const item = storage.getItem(`cart--${products[key].slug}`);
      if (item) {
        cart[key] = { quantity: parseInt(item) };
      }
    }
  }
  return { cart };
};

// Reducer

class Cart extends Container<state> {
  state = stateFromStorage(); //Executes only on page load

  // Synchronizes data to local storage after state is changed
  setStateAndSync = async (data: ((state: state) => state) | state) => {
    await this.setState(data);
    stateToStorage(this.state);
  };

  addItem = (item: string, quantity: number) => {
    this.setStateAndSync((state) => ({
      cart: {
        ...state.cart,
        [item]: {
          quantity:
            state.cart[item] && state.cart[item].quantity > 0
              ? state.cart[item].quantity + quantity
              : quantity,
        },
      },
    }));
  };
  removeItem = (item: string) => {
    this.setStateAndSync((state) => ({
      cart: {
        ...state.cart,
        [item]: {
          quantity: 0,
        },
      },
    }));
  };

  increaseQuantity = (item: string) => {
    this.setStateAndSync((state) => ({
      cart: {
        ...state.cart,
        [item]: {
          quantity: state.cart[item].quantity + 1,
        },
      },
    }));
  };

  decreaseQuantity = (item: string) => {
    this.setStateAndSync((state) => ({
      cart: {
        ...state.cart,
        [item]: {
          quantity:
            state.cart[item].quantity - 1 > 0
              ? state.cart[item].quantity - 1
              : 0,
        },
      },
    }));
  };

  removeAll = () => {
    this.setStateAndSync({ cart: {} });
  };

  getPrices = () => {
    let total = 0;

    Object.entries(this.state.cart).forEach(
      ([key, value]: [string, { quantity: number }]) => {
        total = total + products[key].price * value.quantity;
      }
    );

    return [
      { key: "total", val: total },
      { key: "shipping", val: 50 },
      { key: "vat", val: ~~(total * 0.2).toFixed(2) },
    ];
  };
}

export default Cart;
