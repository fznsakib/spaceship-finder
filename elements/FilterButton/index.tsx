import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";

import { FilterButton as CustomButton, FilterIcon, FilterLabel } from "./styles";

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  open: boolean;
  onClick: () => void;
  filterActive?: boolean;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  open,
  onClick,
  filterActive = false,
  ...props
}) => {
  return (
    <CustomButton onClick={onClick} filterActive={filterActive} {...props}>
      <FilterLabel>{label}</FilterLabel>
      <FilterIcon open={open}>
        <MdOutlineExpandMore />
      </FilterIcon>
    </CustomButton>
  );
};
