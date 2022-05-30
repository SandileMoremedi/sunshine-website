/// <reference types="cypress" />

describe("testing the checkout page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("button").should("contain.text", "Add To Cart").click();
  });

  it("check to see if the items loaded", () => {
    cy.visit("http://localhost:3000/checkout");
    cy.get("h2").should("contain.text", "6 Medium Eggs");
  });
});
