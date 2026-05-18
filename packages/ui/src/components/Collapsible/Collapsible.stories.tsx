import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "./Collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    trigger: "Toggle content",
    children: "Hidden content area.",
  },
};
