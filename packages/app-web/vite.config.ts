import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@itinerary/shared": path.resolve(__dirname, "../shared/src"),
      "@itinerary/tokens": path.resolve(__dirname, "../tokens/src"),
    },
  },
});
