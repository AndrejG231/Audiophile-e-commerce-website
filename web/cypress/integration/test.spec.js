describe("My First Test", () => {
  it("Visit page", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("New product");

    cy.contains("See product").click();
    cy.url().should("include", "product/xx99-mark-two-headphones");
  });
});
