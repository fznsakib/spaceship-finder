import React from "react";

import { ToggleBackground, ToggleContainer, ToggleLabel, ToggleSwitch } from "./styles";

type ToggleProps = {
  selected: boolean;
  onClick: (value: boolean) => void;
  label?: string;
};

export const Toggle: React.FC<ToggleProps> = ({ selected, onClick, label }) => {
  return (
    <ToggleContainer onClick={() => onClick(!selected)}>
      {label && <ToggleLabel>{label}</ToggleLabel>}
      <ToggleBackground selected={selected}>
        <ToggleSwitch selected={selected} />
      </ToggleBackground>
    </ToggleContainer>
  );
};
