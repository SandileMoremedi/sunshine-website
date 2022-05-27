/// <reference types="cypress" />

describe("test the basic navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
  });

  it("Check for header", () => {
    cy.get("h1").should("contain.text", "Contact");
  });
});
