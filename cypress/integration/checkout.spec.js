/// <reference types="cypress" />

describe("testing the checkout page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check to see if the items loaded", () => {
    cy.get("button").should("contain.text", "Add To Cart").click();
  });

  it.only("click on the Add To Cart button", () => {
    cy.get("a").should("contain.text", "checkout").click();
  });
});
