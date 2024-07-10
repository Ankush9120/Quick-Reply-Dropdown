import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Dropdown> = {
  title: "Component/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Preview: Story = {
  args: {
    label: "Select User",
    labelVisibility: "Visible",
    status: "Unfilled",
    labelIconVisibility: "Visible",
    leftIconVisibility: "Visible",
    rightIconVisibility: "Hidden",
    helperText: "",
    required: "Yes",
    type: "SingleNoIcon",
    text: "select something ...",
    activeItemIndex: -1,
    clearable: "No",
    items: [
      "John",
      "Emily ( She is very healthy and athletic, she has red hair )",
      "Michael",
      "Sophia",
      "David",
      "Jessica",
      "William",
      "Olivia",
      "Benjamin",
      "Emma"
    ],
    onSelection: action("item-selected"),
  },
};
