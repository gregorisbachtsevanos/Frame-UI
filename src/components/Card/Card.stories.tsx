import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card, CardBody, CardFooter, CardHeader } from "./Card";

const meta = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    size: "md",
    variant: "primary"
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composed: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>Team space</CardHeader>
      <CardBody>
        Build a reusable, token-first UI system with typed components and polished defaults.
      </CardBody>
      <CardFooter>
        <Button size="sm">Open project</Button>
      </CardFooter>
    </Card>
  )
};
