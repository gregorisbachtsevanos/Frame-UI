import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,

  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    shape: {
      control: "select",
      options: ["circle", "rounded", "square"],
    },

    status: {
      control: "select",
      options: ["none", "online", "offline", "busy"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "John Doe",
  },
};

export const Fallback: Story = {
  args: {
    alt: "Sarah Connor",
    fallback: "SC",
  },
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
    </div>
  ),
};

export const Statuses: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Avatar fallback="A" status="online" />
      <Avatar fallback="B" status="offline" />
      <Avatar fallback="C" status="busy" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Avatar fallback="C" shape="circle" />
      <Avatar fallback="R" shape="rounded" />
      <Avatar fallback="S" shape="square" />
    </div>
  ),
};
