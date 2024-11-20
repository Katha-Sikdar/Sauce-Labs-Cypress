## Sauce Demo Automation Project Using Cypress
### This project automates the Sauce Demo site (https://www.saucedemo.com) using Cypress. It covers the following features:

  - Logging in with valid credentials.
  - Adding items to the cart and verifying them.
  - Proceeding through the checkout process.
  - Completing the purchase and verifying the confirmation.
    
## Features Automated
### Steps to Automate
- Navigate to the Sauce Demo login page and Log in using valid credentials:
  - Username: standard_user
  - Password: secret_sauce
- Verify successful login by asserting the presence of the products page.
  - Add two items to the cart:
      - Item 1: Sauce Labs Backpack
      - Item 2: Sauce Labs Bike Light.
- Navigate to the cart page and verify that both items are present.
- Proceed to checkout.
- Fill in the checkout form with dummy data:
      - First Name: John
      - Last Name: Doe
      - Postal Code: 12345
-  the order summary and assert the total amount.
- Complete the purchase by clicking the "Finish" button.
- Assert that the order confirmation page is displayed.
