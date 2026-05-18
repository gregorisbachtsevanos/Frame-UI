import type { Meta, StoryObj } from "@storybook/react";
import { Resizable } from "./Resizable";

const meta: Meta<typeof Resizable> = {
  title: "Components/Resizable",
  component: Resizable,
};

export default meta;
type Story = StoryObj<typeof Resizable>;

export const Default: Story = {
  args: {
    children: "Resizable area"
  },
};
