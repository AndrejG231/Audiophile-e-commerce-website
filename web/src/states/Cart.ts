import { Container } from "unstated";
import products from "../data/products";

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
