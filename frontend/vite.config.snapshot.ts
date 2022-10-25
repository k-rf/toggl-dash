/// <reference types="vitest" />

import { defineConfig } from "vite";

import config from "./vite.config";

// https://vitejs.dev/config/
export default defineConfig({
  ...config,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
    include: ["snapshot.spec.tsx"],
  },
});
