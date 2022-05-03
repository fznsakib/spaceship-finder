import React from "react";

import { ColorSelectBox, SelectedColorIndicator } from "./styles";

interface ColorSelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  selected: boolean;
}

export const ColorSelect: React.FC<ColorSelectProps> = React.memo(
  ({ color, selected, ...props }) => {
    return (
      <ColorSelectBox color={color} selected={selected} {...props}>
        {selected && <SelectedColorIndicator />}
      </ColorSelectBox>
    );
  }
);
