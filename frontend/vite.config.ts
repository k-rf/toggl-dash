/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://backend:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
    include: ["src/**/*.spec.{ts,tsx}", "tools/**/*.spec.{ts,tsx}"],
    coverage: {
      include: ["src"],
      exclude: ["**/*.spec.{ts,tsx}"],
    },
    reporters: "verbose",
  },
});
