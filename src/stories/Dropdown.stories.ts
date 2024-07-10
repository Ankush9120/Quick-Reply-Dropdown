import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import {
  DropdownTypeEnum,
  IconVisibilityTypeEnum,
  LabelVisibilityTypeEnum,
  RequiredTypeEnum,
  StatusTypeEnum,
} from "./types";

const meta: Meta<typeof Dropdown> = {
  title: "Component/Dropdown",
  component: Dropdown,
  argTypes: {
    labelVisibility: {
      control: { type: "select" },
      options: Object.values(LabelVisibilityTypeEnum),
    },
    status: { control: { type: "select" }, options: Object.values(StatusTypeEnum) },
    labelIconVisibility: {
      control: { type: "select" },
      options: Object.values(IconVisibilityTypeEnum),
    },
    leftIconVisibility: {
      control: { type: "select" },
      options: Object.values(IconVisibilityTypeEnum),
    },
    required: {
      control: { type: "select" },
      options: Object.values(RequiredTypeEnum),
    },
    type: { control: { type: "select" }, options: Object.values(DropdownTypeEnum) },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Preview: Story = {
  args: {
    label: "Select Fruit",
    labelVisibility: LabelVisibilityTypeEnum.Visible,
    status: StatusTypeEnum.Unfilled,
    labelIconVisibility: IconVisibilityTypeEnum.Visible,
    leftIconVisibility: IconVisibilityTypeEnum.Visible,
    helperText: "",
    required: RequiredTypeEnum.Yes,
    type: DropdownTypeEnum.SingleNoIcon,
    text: "nothing selected ...",
    activeItemIndex: -1,
    items: [
      "Banana Banana Banana Banana Banana Banana Banana Banana Banana",
      "Apple",
      "Kiwi",
      "Grapes",
      "Orange",
      "Banana",
      "Apple",
      "Kiwi",
      "Grapes",
      "Orange",
    ],
  },
};
