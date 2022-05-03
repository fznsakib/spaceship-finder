import React, { useMemo, useState } from "react";

import { Button } from "../../elements/Button";
import { ColorSelect } from "../../elements/ColorSelect";
import { DropdownMenu } from "../../elements/DropdownMenu";
import { FilterButton } from "../../elements/FilterButton";
import { colors } from "../../sections/FilterGroup/colors";
import { ColorPickerContainer, FilterContainer } from "./styles";

type ColorFilterProps = {
  state: Record<string, boolean>;
  onChange: (name: string) => void;
  onClear: () => void;
};

export const ColorFilter: React.FC<ColorFilterProps> = React.memo(
  ({ state, onChange, onClear }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const isFilterActive = useMemo(() => {
      return Object.entries(state).filter(([, selected]) => selected === true).length > 0;
    }, [state]);

    return (
      <FilterContainer>
        <FilterButton
          open={open}
          onClick={handleOpen}
          filterActive={isFilterActive}
          label="Colours"
        />
        {open && (
          <DropdownMenu onClose={handleOpen}>
            <ColorPickerContainer>
              {Object.entries(colors).map(([name, color]) => (
                <ColorSelect
                  key={name}
                  color={color}
                  selected={state[name]}
                  onClick={() => onChange(name)}
                />
              ))}
            </ColorPickerContainer>
            <Button onClick={onClear} style={{ marginBottom: 10 }}>
              Clear
            </Button>
          </DropdownMenu>
        )}
      </FilterContainer>
    );
  }
);
