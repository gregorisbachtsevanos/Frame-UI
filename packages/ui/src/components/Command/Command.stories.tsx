import type { Meta, StoryObj } from "@storybook/react";
import { Command } from "./Command";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {
    children: "Type a command"
  },
};
