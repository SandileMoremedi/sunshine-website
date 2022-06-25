/// <reference types="cypress" />

describe("test the basic navigation", () => {
  beforeEach(() => {
    cy.visit("https://sunshine-website-sa.vercel.app/");
  });

  it("Check for header", () => {
    cy.get("button").should("contain.text", "Add To Cart").click();
  });
});
