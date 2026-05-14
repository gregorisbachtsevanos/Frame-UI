import type { Preview } from "@storybook/react";
import { ThemeProvider, type ThemeMode } from "../src/theme";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme",
      defaultValue: "system",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: ["system", "light", "dark"],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.theme as ThemeMode;

      return (
        <ThemeProvider mode={mode} style={{ padding: 16, minHeight: "100vh" }}>
          <Story />
        </ThemeProvider>
      );
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
