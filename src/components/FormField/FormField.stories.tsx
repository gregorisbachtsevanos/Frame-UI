import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../Input";

const meta = {
  title: "Forms/FormField",
  component: FormField,
  tags: ["autodocs"],
  args: {
    children: null
  }
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithHelpText: Story = {
  render: () => (
    <FormField label="Email" htmlFor="email" helpText="We'll never share your email.">
      <Input id="email" placeholder="name@company.com" />
    </FormField>
  )
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email" htmlFor="email-error" error="Please enter a valid address.">
      <Input id="email-error" variant="danger" placeholder="name@company.com" />
    </FormField>
  )
};
