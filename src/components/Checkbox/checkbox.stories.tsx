import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    label: "Accept terms"
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: "Checked state"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled checkbox"
  }
};
