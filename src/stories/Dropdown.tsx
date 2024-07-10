import { useCallback, useEffect, useState } from "react";
import "./dropdown.scss";
import {
  DropdownProps,
  DropdownTypeEnum,
  IconVisibilityTypeEnum,
  LabelVisibilityTypeEnum,
  RequiredTypeEnum,
  StatusTypeEnum,
} from "./types";
import { Check, Info, UserCircle } from "@phosphor-icons/react";

export const Dropdown = ({
  label,
  labelVisibility,
  status,
  helperText,
  labelIconVisibility,
  leftIconVisibility,
  required,
  activeItemIndex,
  type,
  text,
  items,
  ...props
}: DropdownProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number[]>([]);
  const selectedValue = selectedItem.length ? selectedItem.map(d => items?.[d]).join(", ") : '';
  
  const isLabelIconVisible =
    labelIconVisibility === IconVisibilityTypeEnum.Visible;
  const isLeftIconVisible =
    leftIconVisibility === IconVisibilityTypeEnum.Visible;
  const isNoIcon = type === DropdownTypeEnum.SingleNoIcon;
  const isSingleRadio = type === DropdownTypeEnum.SingleRadio;
  const isSingleCheck = type === DropdownTypeEnum.SingleCheck;
  const isMulti = type === DropdownTypeEnum.Multi;
  const isDisabled = status === StatusTypeEnum.Disabled;
  const isError = status === StatusTypeEnum.Error;

  useEffect(() => {
    setSelectedItem([activeItemIndex]);
  }, [activeItemIndex, type]);

  const handleDropdownMenu = useCallback(() => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }, [isDropdownMenuOpen]);
  
  const handleDropDownSelection = useCallback(
    (item: number) => {
      if(isMulti){
        setSelectedItem((prevItem) => {
          const prevItemFiltered = prevItem.filter(d => d !== -1)
          
          if (prevItemFiltered.includes(item)) {
            console.log(prevItemFiltered.filter((d) => d !== item));
            
            return prevItemFiltered.filter((d) => d !== item);
          } else {
            return [...prevItemFiltered, item];
          }
        }
        );
      }else{
        setSelectedItem([item])
        setIsDropdownMenuOpen(false);
      }
    },
    [isMulti]
  );

  return (
    <div
      className="dropdown"
      data-noIcon={isNoIcon}
      data-error={isError}
      data-disabled={isDisabled}
      {...props}
    >
      {labelVisibility === LabelVisibilityTypeEnum.Visible && (
        <div className="label">
          {label} {isLabelIconVisible && <Info size={19.5} />}{" "}
          {required === RequiredTypeEnum.Yes && (
            <span className="required">*</span>
          )}
        </div>
      )}
      <div className="field" onClick={handleDropdownMenu}>
        {isLeftIconVisible && <UserCircle size={19.5} />}{" "}
        <input
          readOnly
          value={selectedValue}
          placeholder={text}
          disabled={isDisabled}
        />
      </div>
      {helperText && <div className="helperText">{helperText}</div>}
      <div className="dropdownMenuWrapper">
        {isDropdownMenuOpen && (
          <ul className="dropdownMenu">
            {items?.map((item, index) => (
              <li
                data-background={isNoIcon || isSingleCheck}
                className="dropdownMenuItem"
                data-active={selectedItem.includes(index)}
                key={index}
                onClick={() => handleDropDownSelection(index)}
              >
                {isMulti && (
                  <div className="checkbox">
                    <Check size={12} weight="bold" className="check" />
                  </div>
                )}
                {isSingleRadio && <div className="radio" />} {item}{" "}
                {isSingleCheck && <Check size={20} className="checkIcon" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
