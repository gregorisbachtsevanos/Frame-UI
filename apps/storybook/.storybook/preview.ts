import type { Preview } from "@storybook/react";
import { darkTheme } from "@frame-ui/theme";

/**
 * Storybook Preview Configuration for Frame-UI
 *
 * This configuration:
 * - Enables Light/Dark theme switching in the story preview
 * - Persists theme preference across sessions
 * - Applies Frame-UI theme classes to the preview container
 * - Synchronizes themes between manager and preview
 * - Updates browser metadata for theme-aware displays
 */

// ============================================================================
// THEME PERSISTENCE
// ============================================================================

const THEME_STORAGE_KEY = "frameui-storybook-theme";

/**
 * Get initial theme from localStorage or system preference
 */
const getInitialTheme = (): "light" | "dark" => {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

/**
 * Save theme preference to localStorage
 */
const saveThemePreference = (theme: "light" | "dark"): void => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
};

// Get initial theme value
const initialTheme = getInitialTheme();

// ============================================================================
// STORYBOOK PREVIEW CONFIGURATION
// ============================================================================

const preview: Preview = {
  // Global type configurations for theme selection
  globalTypes: {
    theme: {
      description: "Frame-UI Theme",
      defaultValue: initialTheme,
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          {
            value: "light",
            icon: "circlehollow",
            title: "Light",
            right: "☀️",
          },
          { value: "dark", icon: "circle", title: "Dark", right: "🌙" },
        ],
        dynamicTitle: true,
      },
    },
  },

  // Decorators to apply theme and update document metadata
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme || initialTheme) as
        | "light"
        | "dark";
      const isDarkMode = theme === "dark";

      // Save theme preference
      saveThemePreference(theme);

      // Notify manager of theme change for synchronized UI updates
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("frameui-theme-changed", {
            detail: { theme },
          })
        );
      }

      // Apply theme to document
      if (typeof document !== "undefined") {
        // Apply/remove dark theme class to document element
        if (isDarkMode) {
          document.documentElement.classList.add(darkTheme);
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.classList.remove(darkTheme);
          document.documentElement.setAttribute("data-theme", "light");
        }

        // Update page title with Frame-UI branding and story name
        const storyTitle = context.title || "Frame UI";
        const storyName = context.name ? ` - ${context.name}` : "";
        document.title = `${storyTitle}${storyName} - Frame UI Design System`;

        // Update meta theme-color for mobile browsers
        let metaThemeColor = document.querySelector(
          'meta[name="theme-color"]'
        );
        if (!metaThemeColor) {
          metaThemeColor = document.createElement("meta");
          metaThemeColor.setAttribute("name", "theme-color");
          document.head.appendChild(metaThemeColor);
        }
        if (isDarkMode) {
          metaThemeColor.setAttribute("content", "#1e293b");
        } else {
          metaThemeColor.setAttribute("content", "#2563eb");
        }
      }

      return Story();
    },
  ],
};

export default preview;
