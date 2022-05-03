import React, { useCallback } from "react";

import { ColorFilter } from "../../components/ColorFilter";
import { ValueFilter } from "../../components/ValueFilter";
import { Box } from "../../elements/Box";
import { Button } from "../../elements/Button";
import { Toggle } from "../../elements/Toggle";
import { FilterState } from "../../pages";
import { Operation, ValueFilterState } from "../../types";
import { FilterGroupGrid, PulseLaserToggleContainer } from "./styles";

type FilterGroupProps = {
  filterState: FilterState;
  colorsOnChange: (name: string) => void;
  colorsOnClear: () => void;
  maxSpeedOnChange: (value: ValueFilterState) => void;
  manufactureDateOnChange: (value: ValueFilterState) => void;
  pulseLaserOnChange: (value: boolean) => void;
};

const maxSpeedOptions: { [label: string]: Operation } = {
  Exactly: "eq",
  "Less than": "lt",
  "Greater than": "gt",
};
const manufactureDateOptions: { [label: string]: Operation } = {
  Exactly: "eq",
  Before: "lt",
  After: "gt",
};

export const FilterGroup: React.FC<FilterGroupProps> = React.memo(
  ({
    filterState,
    colorsOnChange,
    colorsOnClear,
    maxSpeedOnChange,
    manufactureDateOnChange,
    pulseLaserOnChange,
  }) => {
    const onClearAll = useCallback(() => {
      colorsOnClear();
      maxSpeedOnChange({ value: undefined, operation: undefined });
      manufactureDateOnChange({ value: undefined, operation: undefined });
      pulseLaserOnChange(false);
    }, [colorsOnClear, maxSpeedOnChange, manufactureDateOnChange, pulseLaserOnChange]);

    return (
      <Box>
        <FilterGroupGrid>
          <ColorFilter
            state={filterState.colors}
            onChange={colorsOnChange}
            onClear={colorsOnClear}
          />
          <ValueFilter
            state={filterState.maxSpeed}
            label="Max Speed"
            onChange={maxSpeedOnChange}
            min={50}
            max={200}
            valueType="number"
            options={maxSpeedOptions}
          />
          <ValueFilter
            state={filterState.manufactureDate}
            label="Manufacture Date"
            onChange={manufactureDateOnChange}
            min="1980-01-01"
            max="2020-12-31"
            valueType="date"
            options={manufactureDateOptions}
          />
          <PulseLaserToggleContainer>
            <Toggle
              label="Pulse Laser"
              selected={filterState.pulseLaser}
              onClick={pulseLaserOnChange}
            />
          </PulseLaserToggleContainer>
          <Button onClick={onClearAll}>Clear All</Button>
        </FilterGroupGrid>
      </Box>
    );
  }
);
