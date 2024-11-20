const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add plugins here
      require('cypress-mochawesome-reporter/plugin')(on);

      // You can implement additional node event listeners if needed
      return config; // Ensure the config is returned
    },
    specPattern: [
      // Specify the spec files to run
      //'cypress/e2e/cookies.cy.js', // Uncomment if needed
      'cypress/e2e/login-test.cy.js',
      'cypress/e2e/cartpage.cy.js',
      'cypress/e2e/differentUser.cy.js',
      'cypress/e2e/LoginApi.cy.js',
    ],
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
