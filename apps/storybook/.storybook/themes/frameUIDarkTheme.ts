import { create } from "@storybook/theming/create";
import { frameUIDarkLogo } from "../logos";

/**
 * Frame-UI Dark Theme
 *
 * This theme provides a comprehensive dark mode theming for Storybook's Manager UI.
 * It includes branding, color scheme, and UI styling that matches the Frame-UI design system.
 */
export const frameUIDarkTheme = create({
  base: "dark",

  // Branding
  brandTitle: "Frame UI",
  brandUrl: "https://github.com/anomalyco/frame-ui",
  brandImage: frameUIDarkLogo,
  brandTarget: "_self",

  // Primary colors (lighter shades for dark mode)
  colorPrimary: "#60a5fa", // Blue-400
  colorSecondary: "#93c5fd", // Blue-300

  // UI backgrounds
  appBg: "#0f172a", // Slate-900
  appContentBg: "#1e293b", // Slate-800
  appBorderColor: "#334155", // Slate-700
  appBorderRadius: 8,

  // Text colors
  textColor: "#f1f5f9", // Slate-100
  textInverseColor: "#0f172a", // Slate-900

  // Toolbar/Header colors
  barTextColor: "#f1f5f9", // Slate-100
  barSelectedColor: "#60a5fa", // Blue-400
  barBg: "#1e293b", // Slate-800
  barBorderColor: "#334155", // Slate-700

  // Input field colors
  inputBg: "#1e293b", // Slate-800
  inputBorder: "#334155", // Slate-700
  inputTextColor: "#f1f5f9", // Slate-100
  inputBorderRadius: 6,

  // Form element colors
  buttonBg: "#334155", // Slate-700
  booleanBg: "#60a5fa", // Blue-400
  booleanSelectedBg: "#93c5fd", // Blue-300

  // Typography
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Menlo", "Monaco", "Courier New", monospace',
});
