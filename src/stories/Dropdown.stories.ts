import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import {
  ClearableTypeEnum,
  DropdownTypeEnum,
  IconVisibilityTypeEnum,
  LabelVisibilityTypeEnum,
  RequiredTypeEnum,
  StatusTypeEnum,
} from "./types";
import { action } from '@storybook/addon-actions';

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
    rightIconVisibility: {
      control: { type: "select" },
      options: Object.values(IconVisibilityTypeEnum),
    },
    required: {
      control: { type: "select" },
      options: Object.values(RequiredTypeEnum),
    },
    type: { control: { type: "select" }, options: Object.values(DropdownTypeEnum) },
    clearable: { control: { type: "select" }, options: Object.values(ClearableTypeEnum) },
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
    rightIconVisibility: IconVisibilityTypeEnum.Hidden,
    helperText: "",
    required: RequiredTypeEnum.Yes,
    type: DropdownTypeEnum.SingleNoIcon,
    text: "nothing selected ...",
    activeItemIndex: -1,
    clearable: ClearableTypeEnum.No,
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
