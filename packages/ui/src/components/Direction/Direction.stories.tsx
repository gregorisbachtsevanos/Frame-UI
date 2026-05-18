import type { Meta, StoryObj } from "@storybook/react";
import { Direction } from "./Direction";

const meta: Meta<typeof Direction> = {
  title: "Components/Direction",
  component: Direction,
};

export default meta;
type Story = StoryObj<typeof Direction>;

export const Default: Story = {
  args: {
    children: "Direction wrapper"
  },
};
