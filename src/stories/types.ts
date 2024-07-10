export enum LabelVisibilityTypeEnum {
  Visible = "Visible",
  Hidden = "Hidden",
}

export enum StatusTypeEnum {
  Unfilled = "Unfilled",
  Filled = "Filled",
  Disabled = "Disabled",
  Error = "Error",
}

export enum IconVisibilityTypeEnum {
  Visible = "Visible",
  Hidden = "Hidden",
}

export enum RequiredTypeEnum {
  Yes = "Yes",
  No = "No",
}

export enum DropdownTypeEnum {
  SingleNoIcon = "SingleNoIcon",
  SingleRadio = "SingleRadio",
  SingleCheck = "SingleCheck",
  Multi = "Multi",
}

export enum ClearableTypeEnum {
  Yes = "Yes",
  No = "No",
}

export interface DropdownProps {
  label?: string;
  labelVisibility?: LabelVisibilityTypeEnum;
  status: StatusTypeEnum;
  labelIconVisibility: IconVisibilityTypeEnum;
  leftIconVisibility: IconVisibilityTypeEnum;
  rightIconVisibility: IconVisibilityTypeEnum;
  helperText?: string;
  required: RequiredTypeEnum;
  text: string;
  type: DropdownTypeEnum;
  activeItemIndex: number;
  items: string[];
  onSelection: any;
  clearable: ClearableTypeEnum;
}