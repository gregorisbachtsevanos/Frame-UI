import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your email",
    disabled: false,
    invalid: false
  },
  argTypes: {
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
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

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: "Invalid input"
  }
};
