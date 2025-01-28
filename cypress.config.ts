import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl:
    'https://www.todobackend.com/client/index.html?https://mysterious-thicket-31854.herokuapp.com/',
  },
});
