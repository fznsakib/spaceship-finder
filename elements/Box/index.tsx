import React from "react";

import { Paper } from "./styles";

interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  outlined?: boolean;
  elevated?: boolean;
}

export const Box: React.FC<BoxProps> = ({ children, outlined = false, elevated = false }) => {
  return (
    <Paper elevated={elevated} outlined={outlined}>
      {children}
    </Paper>
  );
};
