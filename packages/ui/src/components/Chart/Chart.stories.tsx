import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./Chart";

const meta: Meta<typeof Chart> = {
  title: "Components/Chart",
  component: Chart,
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  args: {
    children: "Chart placeholder"
  },
};
