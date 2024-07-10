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
    label: "Select Fruit",
    labelVisibility: "Visible",
    status: "Unfilled",
    labelIconVisibility: "Visible",
    leftIconVisibility: "Visible",
    rightIconVisibility: "Hidden",
    helperText: "",
    required: "Yes",
    type: "SingleNoIcon",
    text: "nothing selected ...",
    activeItemIndex: -1,
    clearable: "No",
    items: [
      "Strawberry",
      "Apple ( It is very healthy and delecious, it is of red color )",
      "Kiwi",
      "Grapes",
      "Orange",
      "Banana",
      "Apple",
      "Kiwi",
      "Grapes",
      "Orange",
    ],
    onSelection: action("item-selected"),
  },
};
