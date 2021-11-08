import products from "../fixtures/products.json";
const host = "http://localhost:3000/";

const counts = {};

describe("Test all the products, display, counts state ", () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("@abcderjkg");
    cy.viewport("iphone-6");
  });

  it("Visitting products", async () => {
    //   Go to headphones
    cy.visit(host);
    cy.contains(/^headphones$/)
      .next()
      .click();
    cy.url().should("include", "category/headphones");
    cy.get("h3").each((el) => {
      cy.wrap(el).parent().find("a").click();
      cy.contains("+").previous();
    });
  });
});
