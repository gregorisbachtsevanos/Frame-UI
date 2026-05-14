import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Continue",
    size: "md",
    variant: "primary",
    disabled: false,
    loading: false
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "ghost", "danger"]
    },
    onClick: { action: "clicked" }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Loading: Story = {
  args: {
    loading: true
  }
};
