import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your email",
    size: "md",
    variant: "primary"
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "ghost", "danger"]
    },
    onChange: { action: "changed" }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled field"
  }
};
