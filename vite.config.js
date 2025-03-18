import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Asegura rutas relativas en Cloudflare Pages
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
      output: {
        entryFileNames: "assets/main.js", // 👈 Genera siempre "main.js" sin hash
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
