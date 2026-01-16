import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://rahulharlalka.github.io",
  base: "/",
  integrations: [react()],
});