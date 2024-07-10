import { useCallback, useEffect, useState } from "react";
import "./dropdown.scss";
import { DropdownProps } from "./types";
import { CaretDown, Check, Info, UserCircle } from "@phosphor-icons/react";

export const Dropdown = ({
  label,
  labelVisibility,
  status,
  helperText,
  labelIconVisibility,
  leftIconVisibility,
  rightIconVisibility,
  required,
  activeItemIndex,
  type,
  text,
  items,
  onSelection,
  clearable,
  ...props
}: DropdownProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number[]>([]);
  const selectedValue = selectedItem.length
    ? selectedItem.map((d) => items?.[d]).join(", ")
    : "";

  const isFilled = status === "Filled";
  const isUnfilled = status === "Unfilled";
  const isLabelVisible = labelVisibility === "Visible";
  const isLabelIconVisible = labelIconVisibility === "Visible";
  const isLeftIconVisible = leftIconVisibility === "Visible";
  const isRightIconVisible = rightIconVisibility === "Visible";
  const isClearable = clearable === "Yes";
  const isNoIcon = type === "SingleNoIcon";
  const isSingleRadio = type === "SingleRadio";
  const isSingleCheck = type === "SingleCheck";
  const isMulti = type === "Multi";
  const isDisabled = status === "Disabled";
  const isError = status === "Error";
  const isRequired = required === "Yes";

  useEffect(() => {
    if(activeItemIndex){
      if (!items.includes(items[activeItemIndex])) {
        setSelectedItem([]);
      } else {
        setSelectedItem([activeItemIndex]);
      }
    }else{
      setSelectedItem([]);
    }
  }, [activeItemIndex, type]);

  useEffect(() => {
    setIsDropdownMenuOpen(false);
  }, [isDisabled]);

  useEffect(() => {
    if (isFilled && !selectedItem.length) {
      setSelectedItem([0]);
    }
    if (isUnfilled) {
      setSelectedItem([]);
    }
  }, [status]);

  const handleDropdownMenu = useCallback(() => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }, [isDropdownMenuOpen]);

  const handleDropDownSelection = useCallback(
    (itemIndex: number) => {
      if (isMulti) {
        setSelectedItem((prevItem) => {
          let prevItemFiltered = prevItem;

          if (prevItemFiltered.includes(itemIndex)) {
            prevItemFiltered = prevItemFiltered.filter((i) => i !== itemIndex);
          } else {
            prevItemFiltered = [...prevItemFiltered, itemIndex];
          }

          if (onSelection) {
            onSelection(prevItemFiltered.map((i) => items[i]));
          }

          return prevItemFiltered;
        });
      } else {
        if (onSelection) {
          onSelection(items[itemIndex]);
        }
        setSelectedItem([itemIndex]);
        setIsDropdownMenuOpen(false);
      }
    },
    [isMulti]
  );

  const handleClear = useCallback(() => {
    if (!isDisabled) {
      setSelectedItem([]);
    }
  }, []);

  return (
    <div
      className="dropdown"
      data-error={isError}
      data-disabled={isDisabled}
      {...props}
    >
      <div className="dropdownHeader">
        {isLabelVisible && (
          <div className="label">
            {label} {isLabelIconVisible && <Info size={19.5} />}{" "}
            {isRequired && <span className="required">*</span>}
          </div>
        )}

        {isClearable && (
          <div onClick={handleClear} className="clearable">
            clear
          </div>
        )}
      </div>
      <div className="field" onClick={handleDropdownMenu}>
        {isLeftIconVisible && <UserCircle size={19.5} />}{" "}
        <input
          readOnly
          value={selectedValue}
          placeholder={text}
          disabled={isDisabled}
        />{" "}
        {isRightIconVisible && <CaretDown size={19.5} />}
      </div>
      {helperText && <div className="helperText">{helperText}</div>}
      <div
        className="dropdownMenuWrapper"
        data-dropdownactive={isDropdownMenuOpen}
      >
        {isDropdownMenuOpen && (
          <>
            <div className="backdrop" onClick={handleDropdownMenu} />
            <ul className="dropdownMenu">
              {items?.map((item, index) => (
                <li
                  data-background={isNoIcon || isSingleCheck || !type}
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
          </>
        )}
      </div>
    </div>
  );
};
