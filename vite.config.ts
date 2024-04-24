import { defineConfig } from "vite";
import { URL, fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cats-ranking",
  plugins: [vue()],
  resolve: {
    alias: { 
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});