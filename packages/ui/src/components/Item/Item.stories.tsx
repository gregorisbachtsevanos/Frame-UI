import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Item";

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    children: "Item"
  },
};
