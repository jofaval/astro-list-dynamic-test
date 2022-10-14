import { defineConfig } from "astro/config";

const base =
  process.env.NODE_ENV === "production" ? "./astro-list-dynamic-test/" : "./";

// https://astro.build/config
export default defineConfig({
  base,
});
