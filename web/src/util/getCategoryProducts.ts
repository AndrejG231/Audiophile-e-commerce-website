import products from "../data/products";

// Returns list of products for specified category
const getProducts = (category: string) => {
  const productsToDisplay: typeof products[string][] = [];

  Object.values(products).forEach((item) => {
    // Map over all the products data
    if (item.category !== category) {
      return;
    }

    // If current category and new push to beggining, else append to the end of array
    if (item.new) {
      return productsToDisplay.unshift(item);
    }

    return productsToDisplay.push(item);
  });

  return productsToDisplay;
};

export default getProducts;
