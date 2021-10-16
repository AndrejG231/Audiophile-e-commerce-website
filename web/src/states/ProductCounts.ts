import { Container } from "unstated";
import products from "../data/products";

type cartCounts = { [key in typeof products[number]["slug"]]: number };

const defaultState: cartCounts = products.reduce(
  (acc: cartCounts, product) => ({
    ...acc,
    [product.slug]: 1,
  }),
  {}
);

export class ProductCounts extends Container<cartCounts> {
  // Stores selected number of products in memory
  state = defaultState;
  increment = async (productSlug: keyof cartCounts) => {
    this.setState((state) => ({ [productSlug]: state[productSlug] + 1 }));
  };
  decrement = async (productSlug: keyof cartCounts) => {
    await this.setState((state) => ({ [productSlug]: state[productSlug] - 1 }));
  };
}
