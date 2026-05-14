import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Modal } from "./Modal";

const meta = {
  title: "Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    open: false,
    onOpenChange: () => {},
    children: null,
    size: "md",
    closeOnOverlayClick: true
  }
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          {...args}
          open={open}
          onOpenChange={setOpen}
          title="Invite team"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Send invite</Button>
            </>
          }
        >
          Add collaborators to your workspace and share this design system.
        </Modal>
      </>
    );
  }
};
