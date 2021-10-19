import { Container } from "unstated";
import products from "../data/products";

type cartCounts = { [key in typeof products[number]["slug"]]: number };

const defaultState: cartCounts = Object.keys(products).reduce(
  (acc: cartCounts, product) => ({
    ...acc,
    [product]: 1,
  }),
  {}
);

export class ProductCounts extends Container<cartCounts> {
  // Stores selected number of products in memory
  state = defaultState;
  increment = (productSlug: keyof cartCounts) => {
    this.setState((state) => ({ [productSlug]: state[productSlug] + 1 }));
  };
  decrement = (productSlug: keyof cartCounts) => {
    this.setState((state) => ({ [productSlug]: state[productSlug] - 1 }));
  };
  reset = (item: keyof cartCounts) => {
    this.setState({ [item]: 1 });
  };
}
