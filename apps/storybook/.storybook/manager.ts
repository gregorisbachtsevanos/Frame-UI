import { addons } from "@storybook/manager-api";
import { frameUILightTheme } from "./themes/frameUILightTheme";
import { frameUIDarkTheme } from "./themes/frameUIDarkTheme";

/**
 * Storybook Manager Configuration for Frame-UI
 *
 * This file configures:
 * - Frame-UI branding throughout the Manager UI
 * - Light and Dark theme support with persistence
 * - Theme switching capability
 * - Logo display in sidebar header
 * - Manager layout preferences
 */

// ============================================================================
// THEME PERSISTENCE AND SWITCHING
// ============================================================================

/**
 * Storage key for theme preference
 */
const THEME_STORAGE_KEY = "frameui-storybook-theme";

/**
 * Get the stored theme preference or system preference
 */
const getInitialTheme = (): "light" | "dark" => {
  // Check localStorage for saved preference
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
  }

  // Check system preference
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

/**
 * Initialize theme based on user preference
 */
const initialTheme = getInitialTheme();

// ============================================================================
// CONFIGURE MANAGER WITH INITIAL THEME
// ============================================================================

const initialThemeObject =
  initialTheme === "dark" ? frameUIDarkTheme : frameUILightTheme;

addons.setConfig({
  // Apply the initial theme based on preference
  theme: initialThemeObject,

  // Sidebar configuration
  sidebar: {
    showRoots: false,
    collapsedRoots: ["Other"],
  },

  // Toolbar/Header configuration with Frame-UI branding
  toolbar: {
    title: "Frame UI",
    subtitle: "React Component Library",
    nonce: undefined,
  },

  // Layout preferences
  navSize: 300,
  bottomPanelHeight: 200,
  rightPanelWidth: 300,
  panelPosition: "right",

  // Feature toggles
  enableShortcuts: true,
  showPanel: true,
  showNav: true,
  showToolbar: true,

  // Docs tab configuration
  previewTabs: {
    "storybook/docs/panel": { hidden: false },
  },
});

// ============================================================================
// DYNAMIC THEME SWITCHING SUPPORT
// ============================================================================

/**
 * Listen for global theme changes and update Storybook
 * This is called from the preview to trigger theme switching
 */
if (typeof window !== "undefined") {
  // Listen for theme change events from the preview
  window.addEventListener("frameui-theme-changed", (event: Event) => {
    const customEvent = event as CustomEvent<{ theme: "light" | "dark" }>;
    const newTheme = customEvent.detail?.theme;

    if (newTheme) {
      // Save preference
      saveThemePreference(newTheme);

      // Update Manager UI theme
      const newThemeObject =
        newTheme === "dark" ? frameUIDarkTheme : frameUILightTheme;
      addons.setConfig({
        theme: newThemeObject,
      });
    }
  });
}

// ============================================================================
// EXPORTS
// ============================================================================

export { frameUILightTheme, frameUIDarkTheme, getInitialTheme, saveThemePreference };

