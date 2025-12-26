const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "cypress/allure-results",
      });
      return config;
      // implement node event listeners here
    },
  },

  // specPattern: "cypress/e2e/*.cy.js",
  retries: 1,
  env: {
    baseURL: "https://www.saucedemo.com/",
  }
});

