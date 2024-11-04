describe("creation of post", () => {
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

  it("user can create a post", () => {
    cy.get('[data-testid="cypress-leftSideBar-4"]')
      .contains("Create Post")
      .click();
    cy.url().should("include", "/create-post");
    cy.get('[data-testid="snapgram-createPost-title"]').should(
      "have.text",
      "Create Post"
    );
    cy.get('[data-testid="snapgram-createPost-captionTextarea"]').type(
      "hello world"
    );

    const imagePath = "cypress//fixtures//house.png";
    cy.get('[data-testid="snapgram-createPost-addImage"]').selectFile(
      imagePath,
      { force: true }
    );
    cy.get('[data-testid="snapgram-createPost-addLocationInput"]').type(
      "Lille"
    );
    cy.get('[data-testid="snapgram-createPost-addTagsInput"]').type(
      "home, logo"
    );
    cy.get('[data-testid="snapgram-CreatePost-button"]')
      .should("exist")
      .click();
    cy.wait(2000);
    cy.url().should("include", "");
  });
});
