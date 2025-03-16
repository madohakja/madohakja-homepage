// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
//import db from "@astrojs/db";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // The `site` property specifies the base URL for your site.
  // Be sure to update this to your own domain (e.g., "https://yourdomain.com") before deploying.
  site: "https://www.madohakja.com",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    markdoc(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    //db(),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Cloudflare Workers 환경에서 React 19의 잘못된 번들링 문제 해결
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },
  output: "static",
  adapter: cloudflare(),
  //adapter: vercel(),
});




// 로컬 테스트
// export default defineConfig({
//   // The `site` property specifies the base URL for your site.
//   // Be sure to update this to your own domain (e.g., "https://yourdomain.com") before deploying.
//   site: "https://www.madohakja.com",
//   prefetch: true,
//   trailingSlash: "never",
//   experimental: {
//     clientPrerender: true,
//   },
//   integrations: [
//     react(),
//     markdoc(),
//     ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
//     //db(),
//     svelte(),
//   ],
//   vite: {
//     plugins: [tailwindcss()],
//   },
//   output: "static",
//   adapter: cloudflare(),
//   //adapter: vercel(),
// });
