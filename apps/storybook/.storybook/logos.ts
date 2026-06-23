/**
 * Logo asset imports for Storybook branding
 * This module imports logos statically so Storybook can properly resolve them
 */

// Import logos directly - Vite will handle these as assets
import frameUILightLogo from "./assets/frameUI-light.svg";
import frameUIDarkLogo from "./assets/frameUI-dark.svg";
import frameUILogoPNG from "./assets/frameUI-logo.png";

/**
 * Get the appropriate logo for the theme
 * @param isDarkMode - Whether dark mode is active
 * @returns The logo URL for the given theme
 */
export const getThemeLogo = (isDarkMode: boolean): string => {
  return isDarkMode ? frameUIDarkLogo : frameUILightLogo;
};

/**
 * Get the primary Frame-UI logo
 * @returns The primary logo URL
 */
export const getPrimaryLogo = (): string => {
  return frameUILogoPNG;
};

// Export all logo URLs for direct use
export { frameUILightLogo, frameUIDarkLogo, frameUILogoPNG };
