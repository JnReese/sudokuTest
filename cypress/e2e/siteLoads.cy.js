// <reference types="cypress" />;

describe("site loads - hint button work", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("site loads", () => {});
  it("hint button works", () => {
    cy.get(".game__cell")
      .not(".game__cell--filled")
      .each((cell) => {
        cy.wrap(cell).click();
        cy.get(".status__action-hint").click();
        cy.get(".overlay__text").should("exist");
      });
  });
});
