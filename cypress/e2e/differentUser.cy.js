describe('Login Test for locked_out_user', () => {
    beforeEach(() => {
      // Visit the Sauce Demo login page
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('should show an error for locked_out_user', () => {
      // Enter username
      cy.get('#user-name').type('locked_out_user');
      // Enter password
      cy.get('#password').type('secret_sauce');
      // Click the login button
      cy.get('#login-button').click();
  
      // Assert the error message
      cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out.');
    });
  });
  