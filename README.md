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

## Project Structure 

cypress/
├── e2e/
│   ├── API Testing             # Custom commands for reusable actions
        ├── checkoutApi.cy.js
        ├── LoginAPI.cy.js
│   ├── Test Cases
        ├── cartpage.cy.js       # Tests for adding items to the cart and checkout process
        ├── differentUser.cy.js  # Parameterized tests for various user roles
        ├── login-test.cy.js     # Tests for logging in       
├── fixtures/
│   ├── sauce-demo.json           # Contains test data like user credentials
├── pages/
│   ├── cartpage.js             # Contains test infos about cartpage
    ├── checkoutpage.js         # Contains test infos about checkoutpage
    ├── LoginPage.js            # Contains test infos about loginpage
├── support/
│   ├── commands.js             # Custom commands for reusable actions
│   ├── e2e.js                  # Support configuration
├── reports/                    # Reports generated after test runs

## Getting Started 
### Setup
  - Clone the repository: git clone ``` https://github.com/Katha-Sikdar/Sauce-Labs-Cypress ```
### Install Dependencies : 
  - using ```npm install ``` command
### Open Cypress:
 - ``` npx cypress open ```
   
## Running Tests
### Run Specific Tests 
  - Run a specific test file: ``` npx cypress run --spec cypress/e2e/<test-file>.cy.js ```

### Run the entire test suite: 
  - ``` npx cypress run ```

## Features 
### Reusable Commands
  - Custom commands are defined in cypress/support/commands.js for actions like login and adding items to the cart.
### Fixtures 
  - Test data like user credentials and product names are stored in cypress/fixtures/sauce-demo.json. This allows easy reuse and parameterization
### Handling Flaky Elements
  - Selectors use reliable attributes like data-test instead of element IDs. Cypress retries failed assertions automatically.

### Bonus Features
  - Parameterize the test to run with different user roles, such as locked_out_user.
  - Use API testing with cy.intercept() to mock or verify backend calls (e.g., for
    login or checkout).
    
### Reporting
  - This project uses **cypress-mochawesome-reporter** for detailed HTML reports. Reports are saved in the **cypress/reports** folder after test runs.
  - Install the reporter: ``` npm install --save-dev cypress-mochawesome-reporter ```

## Live Demo

https://github.com/user-attachments/assets/a620da7f-843b-45fd-a54c-83713944aad1


## Report 
 
![Screenshot_20-11-2024_20406_](https://github.com/user-attachments/assets/3e9c2ad1-0a36-4450-9497-58006abfe241)




