import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],

  resolve: {
    alias: {
      "@frame-ui/theme": path.resolve(__dirname, "../theme/src"),
      "@frame-ui/tokens": path.resolve(__dirname, "../tokens/src"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
