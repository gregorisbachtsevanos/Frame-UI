import type { Meta, StoryObj } from "@storybook/react";
import { Empty } from "./Empty";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {
    children: "No data available"
  },
};
