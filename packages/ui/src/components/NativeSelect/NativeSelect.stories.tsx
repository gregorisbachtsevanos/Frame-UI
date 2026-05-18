import type { Meta, StoryObj } from "@storybook/react";
import { NativeSelect } from "./NativeSelect";

const meta: Meta<typeof NativeSelect> = {
  title: "Components/NativeSelect",
  component: NativeSelect,
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  args: {
    children: <><option>One</option><option>Two</option></>
  },
};
