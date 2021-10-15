import { Container } from "unstated";
import products from "../data/products";
import { createCookie, getCookie } from "../util/manageCookies";

const COUNT_KEY = "@abcderjkg";

type cartCounts = { [key in typeof products[number]["slug"]]: number };

const cookie = JSON.parse(getCookie(COUNT_KEY) || "{}") as cartCounts;

const defaultState: cartCounts =
  Object.keys(cookie).length === 0
    ? products.reduce(
        (acc: cartCounts, product) => ({
          ...acc,
          [product.slug]: 1,
        }),
        {}
      )
    : cookie;

console.log(defaultState);

export class ProductCounts extends Container<cartCounts> {
  state = defaultState;
  increment = async (productSlug: keyof cartCounts) => {
    await this.setState((state) => ({ [productSlug]: state[productSlug] + 1 }));
    createCookie({
      name: COUNT_KEY,
      value: JSON.stringify(this.state),
      expires: new Date(new Date().getTime() + 1000 * 60 * 60),
    });
  };
  decrement = async (productSlug: keyof cartCounts) => {
    await this.setState((state) => ({ [productSlug]: state[productSlug] - 1 }));
    createCookie({
      name: COUNT_KEY,
      value: JSON.stringify(this.state),
      expires: new Date(new Date().getTime() + 1000 * 60 * 60),
    });
  };
}
