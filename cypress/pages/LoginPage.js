class LoginPage {

    KuraLogin() {
        cy.visit("https://www.saucedemo.com/");

        // Enter username
        cy.get('#user-name').type('standard_user');

        // Enter password
        cy.get('#password').type('secret_sauce');

        // Click the login button
        cy.get('#login-button').click();

        // Assert that the products page is displayed
        cy.url().should('include', '/inventory.html'); // URL check
        cy.contains('Products').should('be.visible'); // Page header check
    }

}

export default LoginPage;