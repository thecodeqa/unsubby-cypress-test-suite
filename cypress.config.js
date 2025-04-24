const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://unsubby.vercel.app",
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000
  },
});
