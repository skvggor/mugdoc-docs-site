import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mugdoc-docs-site.reposito.rio.br",
  integrations: [
    starlight({
      title: "mugdoc-docs-site",
      customCss: ["./src/styles/global.css"],
      components: {
        Footer: "./src/components/Footer.astro",
        PageFrame: "./src/components/PageFrame.astro",
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
