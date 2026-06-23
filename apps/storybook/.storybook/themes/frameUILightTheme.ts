import { create } from "@storybook/theming/create";
import { frameUILightLogo } from "../logos";

/**
 * Frame-UI Light Theme
 *
 * This theme provides a comprehensive light mode theming for Storybook's Manager UI.
 * It includes branding, color scheme, and UI styling that matches the Frame-UI design system.
 */
export const frameUILightTheme = create({
  base: "light",

  // Branding
  brandTitle: "Frame UI",
  brandUrl: "https://github.com/anomalyco/frame-ui",
  brandImage: frameUILightLogo,
  brandTarget: "_self",

  // Primary colors
  colorPrimary: "#2563eb", // Blue-600
  colorSecondary: "#1d4ed8", // Blue-700

  // UI backgrounds
  appBg: "#ffffff",
  appContentBg: "#f8fafc", // Slate-50
  appBorderColor: "#e2e8f0", // Slate-200
  appBorderRadius: 8,

  // Text colors
  textColor: "#0f172a", // Slate-900
  textInverseColor: "#ffffff",

  // Toolbar/Header colors
  barTextColor: "#0f172a", // Slate-900
  barSelectedColor: "#2563eb", // Blue-600
  barBg: "#ffffff",
  barBorderColor: "#e2e8f0", // Slate-200

  // Input field colors
  inputBg: "#ffffff",
  inputBorder: "#e2e8f0", // Slate-200
  inputTextColor: "#0f172a", // Slate-900
  inputBorderRadius: 6,

  // Form element colors
  buttonBg: "#f1f5f9", // Slate-100
  booleanBg: "#2563eb", // Blue-600
  booleanSelectedBg: "#1d4ed8", // Blue-700

  // Typography
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Menlo", "Monaco", "Courier New", monospace',
});
