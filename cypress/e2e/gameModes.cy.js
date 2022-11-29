// <reference types="cypress" />;

describe("All gameModes are available", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Easy mode works", () => {
    cy.get(".status__difficulty-select").should("have.value", "Easy");
    cy.get(".game__cell--filled").should("have.length", 45);
  });
  it("Medium mode works", () => {
    cy.get("[name=status__difficulty-select]").select(1);
    cy.get(".game__cell--filled").should("have.length", 40);
  });
  it("Hard mode works", () => {
    cy.get("[name=status__difficulty-select]").select(2);
    cy.get(".game__cell--filled").should("have.length", 30);
  });
  it("fails", () => {
    cy.get("Nothing");
  });
});
