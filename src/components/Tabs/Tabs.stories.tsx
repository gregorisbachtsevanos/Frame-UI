import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "primary",
    items: [
      {
        id: "overview",
        label: "Overview",
        content: "Track releases and design decisions in one place."
      },
      {
        id: "activity",
        label: "Activity",
        content: "Review recent commits and component updates."
      },
      {
        id: "settings",
        label: "Settings",
        content: "Manage themes, tokens, and package publishing settings."
      }
    ]
  }
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
