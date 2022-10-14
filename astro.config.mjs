import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jofaval.github.io",
  base: "/astro-list-dynamic-test",
  integrations: [react()],
});
