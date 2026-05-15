import type { Preview } from "@storybook/react";
import { darkTheme } from "@frame-ui/theme";

const preview: Preview = {
  globalTypes: {
    theme: {
      defaultValue: "light",
      toolbar: {
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle(darkTheme, theme === "dark");
      }

      return Story();
    },
  ],
};

export default preview;
