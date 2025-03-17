import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 Importante para rutas en Cloudflare Pages
  build: {
    outDir: "dist", // 👈 Cloudflare buscará archivos aquí
    rollupOptions: {
      input: "index.html",
    },
  },
});
