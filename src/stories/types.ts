export type LabelVisibilityType = "Visible" | "Hidden";

export type StatusType = "Unfilled" | "Filled" | "Disabled" | "Error";

export type IconVisibilityType = "Visible" | "Hidden";

export type RequiredType = "Yes" | "No";

export type DropdownType = "SingleNoIcon" | "SingleRadio" | "SingleCheck" | "Multi";

export type ClearableType = "Yes" | "No";

export interface DropdownProps {
  label?: string;
  labelVisibility?: LabelVisibilityType;
  status?: StatusType;
  labelIconVisibility?: IconVisibilityType;
  leftIconVisibility?: IconVisibilityType;
  rightIconVisibility?: IconVisibilityType;
  helperText?: string;
  required?: RequiredType;
  text?: string;
  type?: DropdownType;
  activeItemIndex?: number;
  items: string[];
  onSelection?: (selectedItems: string | string[]) => void;
  clearable?: ClearableType;
}
