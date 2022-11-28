import { defineConfig } from "cypress";

export default defineConfig({
  //@ts-ignore
  baseUrl: "http://localHost3000",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
