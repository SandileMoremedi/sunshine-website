/// <reference types="cypress"/>

describe("testing how Cypress works", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("checks the header", () => {
    cy.get("h1").should("contain.text", "Sunshine");
  });

  it("change visibility", () => {
    cy.viewport("iphone-8");
    cy.get(".navbar").click();
  });
});
