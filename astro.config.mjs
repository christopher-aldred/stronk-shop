import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
