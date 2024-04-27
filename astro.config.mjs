import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
//import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  // server: { port: 8080, host: true },
  output: "server",
  adapter: vercel(),
  // adapter: node({
  //   mode: "standalone",
  // }),
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
