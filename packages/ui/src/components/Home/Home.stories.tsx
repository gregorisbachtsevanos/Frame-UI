import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "./Home";

/**
 * The Frame UI Design System Home Page
 *
 * This is the default landing page for Storybook that provides:
 * - Project overview and branding
 * - Quick start guide
 * - Component category showcase
 * - Design system tokens (colors, spacing, typography)
 * - Documentation links
 * - Recent changelog/updates
 *
 * This page serves as the entry point for new developers exploring the Frame UI component library.
 */
const meta: Meta<typeof Home> = {
  title: "Home",
  component: Home,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      // This disables the docs tab for the home page as it's the main homepage
      disable: true,
    },
  },
  argTypes: {
    projectName: {
      description: "Name of the project to display in the hero section",
      control: "text",
    },
    projectDescription: {
      description: "Description/tagline for the project",
      control: "text",
    },
    version: {
      description: "Version number to display",
      control: "text",
    },
    githubUrl: {
      description: "GitHub repository URL",
      control: "text",
    },
    docsUrl: {
      description: "Documentation website URL",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Home>;

/**
 * Default Home Page
 *
 * The main landing page for Frame UI Storybook with all default values.
 */
export const Default: Story = {
  args: {
    projectName: "Frame UI",
    projectDescription:
      "A modern, accessible React component library built with TypeScript and Vanilla Extract CSS",
    version: "1.0.0",
    githubUrl: "https://github.com/anomalyco/frame-ui",
    docsUrl: "https://frame-ui.dev",
  },
};

/**
 * Custom Project Example
 *
 * Shows how the home page can be customized with different project names and descriptions.
 */
export const CustomProject: Story = {
  args: {
    projectName: "Acme Design System",
    projectDescription:
      "Enterprise-grade component library with comprehensive design tokens and accessibility features",
    version: "2.5.0",
    githubUrl: "https://github.com/acmecorp/design-system",
    docsUrl: "https://design.acme.com",
  },
};

/**
 * Minimal Configuration
 *
 * Shows the home page with minimal custom configuration, using mostly default values.
 */
export const Minimal: Story = {
  args: {
    projectName: "My Component Library",
  },
};
