import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://rahulharlalka.github.io",
  base: "/short-star/",
  integrations: [react()],
});