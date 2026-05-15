import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  stories: ["../../packages/ui/src/**/*.stories.@(ts|tsx|mdx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],

  viteFinal: async (config) => {
    config.plugins = config.plugins || [];

    config.plugins.push(vanillaExtractPlugin());

    config.resolve = {
      ...config.resolve,
      alias: {
        "@frame-ui/theme": path.resolve(__dirname, "../../packages/theme/src"),
        "@frame-ui/ui": path.resolve(__dirname, "../../packages/ui/src"),
      },
    };

    // 🔥 CRITICAL FIX FOR STORYBOOK 8 + VITE
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: [
        "storybook/internal/csf",
        "storybook/internal/preview/runtime",
        "@storybook/react",
        "@storybook/react-vite",
      ],
    };

    return config;
  },
};

export default config;
