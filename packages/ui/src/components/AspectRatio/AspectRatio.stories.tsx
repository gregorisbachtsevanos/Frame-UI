import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./AspectRatio";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,

  argTypes: {
    ratio: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: "16:9 Container",
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: "1:1 Square",
  },
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
    children: "3:4 Portrait",
  },
};

export const WithImage: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=1200&auto=format&fit=crop"
          alt="Example"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AspectRatio>
    </div>
  ),
};
