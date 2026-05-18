import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",

  component: Accordion,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    defaultOpen: {
      control: "boolean",
    },

    title: {
      control: "text",
    },

    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: "What is Frame UI?",
    children: "Frame UI is an enterprise-grade React design system.",
  },
};

export const OpenByDefault: Story = {
  args: {
    title: "Open accordion",
    defaultOpen: true,
    children: "This accordion is expanded initially.",
  },
};

export const LongContent: Story = {
  args: {
    title: "Enterprise Design Systems",
    children:
      "A robust design system includes tokens, accessibility, theming, documentation, testing, CI/CD pipelines, and composable architecture.",
  },
};
