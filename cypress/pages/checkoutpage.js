class Checkout {
    checkoutprod() {
        // Click the "Checkout" button
        cy.get('[data-test="checkout"]').click();

        // Fill in the checkout form
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();

        // Verify the order summary
        cy.contains('.summary_info', 'Payment Information').should('be.visible');
        cy.contains('.summary_info', 'Shipping Information').should('be.visible');

        // Assert the total amount
        cy.get('.summary_total_label').then((total) => {
            const totalAmount = total.text();
            expect(totalAmount).to.include('$'); // Verify currency
            // Add specific amount assertions if required

            // Click the "Finish" button
            cy.get('[data-test="finish"]').click();

            // Verify the order confirmation page
            cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER').should('be.visible');
            cy.contains('.complete-text', 'Your order has been dispatched').should('be.visible');

        });







        // Click the "Checkout" button
        cy.get('[data-test="checkout"]').click();

        // Verify that the checkout page is displayed
        cy.url().should('include', '/checkout-step-one.html');
        cy.contains('Checkout: Your Information').should('be.visible');



    }
}

export default checkoutpage;