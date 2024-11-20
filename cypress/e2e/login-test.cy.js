/// <reference types="cypress" />
import LoginPage from "../pages/LoginPage"

describe('Sauce Demo Login Test', () => {
    const loginPage = new LoginPage();
    it("Valid login", () => {
        loginPage.KuraLogin();

    })
})



