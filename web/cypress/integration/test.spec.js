import products from "../fixtures/products.json";
const host = "http://localhost:3000/";

describe("My First Test", () => {
  it("Visit page", () => {
    cy.viewport("iphone-6");
    cy.visit(host);

    cy.contains("New product").next().next().next().click();
    cy.url().should("include", "product/xx99-mark-two-headphones");
  });
});

describe("Go to home page", () => {
  it("Go to home page", () => {
    cy.get("nav").children().first().next().click();
    cy.url().should("eq", host);
  });
});

describe("Add to shopping cart counts test", () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("@abcderjkg");
  });

  const counts = {};
  products.forEach((product) => {
    it(`Checking product ${product.name}`, () => {
      cy.visit(host + "product/" + product.slug);
      cy.contains(product.name);
      cy.contains(product.description);
      cy.contains(product.price.toLocaleString("en-US"));
      if (product.new) {
        cy.contains("new product", { matchCase: false });
      }
    });

    counts[product.slug] = Math.round(Math.random() * 10 + 2);
    it(`Selecting product ${counts[product.slug]} times.`, () => {
      for (let i = 1; i < counts[product.slug]; i++) {
        cy.contains("+").click();
      }
      cy.contains("+").prev().contains(counts[product.slug]);
    });
  });

  it("Revisiting products ...");

  products.forEach((product) => {
    it(`Product ${product.name} should be ${
      counts[product.slug]
    } times selected`, () => {
      cy.visit(host + "product/" + product.slug);
      cy.contains("+").prev().contains(counts[product.slug]);
    });
  });
});
