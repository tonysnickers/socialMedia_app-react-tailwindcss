describe("test user login ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/sign-in");
    cy.get('[data-testid="cypress-login-title"]').should(
      "have.text",
      "Log in to your account"
    );
    cy.get('[data-testid="cypress-login-emailInput"]')
      .should("exist")
      .type("cypress@gmail.com");
    cy.get('[data-testid="cypress-login-passwordInput"]')
      .should("exist")
      .type("azertyuiop");
    cy.get('[data-testid="cypress-login-signin-btn"]').click();
  });
  it("passes", () => {});
});
