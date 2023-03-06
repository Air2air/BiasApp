import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { VitePluginFonts } from "vite-plugin-fonts";

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: "Roboto",
            local: "Roboto",
            src: "/fonts/Roboto/*.ttf",
          },
          {
            name: "Roboto Condensed",
            local: "Roboto Condensed",
            src: "/fonts/Roboto_Condensed/*.ttf",
          },
          {
            name: "Source Sans Pro",
            local: "Source Sans Pro",
            src: "/fonts/Source_Sans_Pro/*.ttf",
          },
        ],
        display: "auto",
        preload: true,
      },
    }),
  ],
  define: {
    "process.env": {},
  },

  server: {
    port: 8000,
  },
});
