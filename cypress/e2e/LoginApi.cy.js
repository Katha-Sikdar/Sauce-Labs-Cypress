describe('Login API Verification', () => {
    it('Intercepts and verifies login request', () => {
      cy.visit('https://www.saucedemo.com/');
  
      // Intercept login POST request
      cy.intercept('POST', '**/login', (req) => {
        // Verify request payload
        expect(req.body).to.include({
          username: 'standard_user',
          password: 'secret_sauce',
        });
  
        // Optionally modify the request or pass it through
        req.continue((res) => {
          // Verify the response
          expect(res.statusCode).to.eq(200);
        });
      }).as('loginRequest');
  
      // Perform login
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Wait for the intercepted call
      cy.wait('@loginRequest');
  
      // Assert successful navigation
      cy.url().should('include', '/inventory.html');
    });
  });
  