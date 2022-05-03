import React from "react";

import { Box } from "../Box";
import { Button } from "../Button";
import { BoxContentContainer, Dropdown } from "./styles";

type DropdownMenuProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, onClose }) => {
  return (
    <Dropdown>
      <Box elevated outlined>
        <BoxContentContainer>
          {children}
          <Button onClick={onClose}>Close</Button>
        </BoxContentContainer>
      </Box>
    </Dropdown>
  );
};
