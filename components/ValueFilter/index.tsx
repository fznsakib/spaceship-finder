import React, { useState } from "react";

import { DropdownMenu } from "../../elements/DropdownMenu";
import { FilterButton } from "../../elements/FilterButton";
import { Operation, ValueFilterState } from "../../types";
import {
  DropdownContentContainer,
  FilterContainer,
  OperationSelect,
  ValueInput,
  ValueText,
} from "./styles";

interface ValueFilterProps {
  state: ValueFilterState;
  label: string;
  onChange: (value: ValueFilterState) => void;
  min: number | string;
  max: number | string;
  valueType: "number" | "date";
  options: { [label: string]: Operation };
}

export const ValueFilter = React.memo(
  ({ state, label, onChange, min, max, valueType, options }: ValueFilterProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const handleFilterClear = () => onChange({ value: undefined, operation: undefined });

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (state.operation) {
        onChange({ value: event.target.value, operation: state.operation });
      }
    };

    const handleOperationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value === "") {
        handleFilterClear();
      } else {
        onChange({
          value: state.value || min.toString(),
          operation: event.target.value as Operation,
        });
      }
    };

    return (
      <FilterContainer>
        <FilterButton
          open={open}
          onClick={handleOpen}
          filterActive={state.value !== undefined}
          label={label}
        />
        {open && (
          <DropdownMenu onClose={handleOpen}>
            <DropdownContentContainer>
              <OperationSelect value={state.operation || ""} onChange={handleOperationChange}>
                <option value="">Off</option>
                {Object.entries(options).map(([optionLabel, value]) => (
                  <option key={optionLabel} value={value}>
                    {optionLabel}
                  </option>
                ))}
              </OperationSelect>
              {state.operation && (
                <>
                  <ValueInput
                    type={valueType === "number" ? "range" : "date"}
                    min={min}
                    max={max}
                    value={state.value}
                    onChange={handleValueChange}
                  />
                  {valueType === "number" && <ValueText>{state.value}</ValueText>}
                </>
              )}
            </DropdownContentContainer>
          </DropdownMenu>
        )}
      </FilterContainer>
    );
  }
);
