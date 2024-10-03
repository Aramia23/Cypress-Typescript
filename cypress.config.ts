import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl:
    'https://www.todobackend.com/client/index.html?https://mysterious-thicket-31854.herokuapp.com/',
  },
});
