import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitest from "vitest";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./testing-setup.ts",
  },
});
