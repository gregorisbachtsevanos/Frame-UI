import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,

  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "primary", "success", "warning", "danger"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    solid: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "New",
  },
};

export const Tones: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="primary">Primary</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="danger">Danger</Badge>
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <Badge tone="neutral" solid>
        Neutral
      </Badge>

      <Badge tone="primary" solid>
        Primary
      </Badge>

      <Badge tone="success" solid>
        Success
      </Badge>

      <Badge tone="warning" solid>
        Warning
      </Badge>

      <Badge tone="danger" solid>
        Danger
      </Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
