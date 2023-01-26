const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://www.pixel.bet",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});