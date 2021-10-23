import { Container } from "unstated";

type state = {
  cart: {
    [key in string]: {
      quantity: number;
    };
  };
};

class Cart extends Container<state> {
  state = { cart: {} };
  addItem = (item: string, quantity: number) => {
    this.setState((state) => ({
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
    this.setState((state) => ({
      cart: {
        ...state.cart,
        [item]: {
          quantity: 0,
        },
      },
    }));
  };

  increaseQuantity = (item: string) => {
    this.setState((state) => ({
      cart: {
        ...state.cart,
        [item]: {
          quantity: state.cart[item].quantity + 1,
        },
      },
    }));
  };

  decreaseQuantity = (item: string) => {
    this.setState((state) => ({
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
    this.setState({ cart: {} });
  };
}

export default Cart;
