/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";
import cartpage from "../pages/CartPage";

describe('Sauce Demo Cart and Checkout Flow', () => {
    const loginPage = new LoginPage();
    const addcart = new cartpage();
    //const checkout = new cartpage();

    beforeEach(() => {
        loginPage.KuraLogin();

    });

    it('Adds two items to the cart and verifies them', () => {
        // Add "Sauce Labs Backpack" to the cart
        cy.contains('.inventory_item', 'Sauce Labs Backpack').within(() => {
            cy.get('button').click();
        });

        // Add "Sauce Labs Bike Light" to the cart
        cy.contains('.inventory_item', 'Sauce Labs Bike Light').within(() => {
            cy.get('button').click();
        });

        // Navigate to the cart page
        cy.get('.shopping_cart_link').click();

        // Verify both items are present in the cart
        cy.contains('.cart_item', 'Sauce Labs Backpack').should('be.visible');
        cy.contains('.cart_item', 'Sauce Labs Bike Light').should('be.visible');

        // Click the "Checkout" button
        cy.get('[data-test="checkout"]').click();
    });
    [].forEach((event) => {


        it('Fills in the checkout form and verifies the order summary', () => {
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
            });
        });

        [].forEach((event) => {

            it('Completes the purchase and verifies the confirmation page', () => {
                // Click the "Finish" button
                cy.get('[data-test="finish"]').click();

                // Verify the order confirmation page
                cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER').should('be.visible');
                cy.contains('.complete-text', 'Your order has been dispatched').should('be.visible');
            });


        })

        //}

    });
});








