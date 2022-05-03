import React from "react";

import { Footer as CustomFooter, Logo } from "./styles";

export const Footer: React.FC = () => {
  return (
    <CustomFooter>
      Created by Faizaan for{" "}
      <Logo>
        <a href="https://poly.ai" target="_blank" rel="noopener noreferrer">
          <img src="/logo.png" alt="PolyAI Logo" width={72} />
        </a>
      </Logo>
    </CustomFooter>
  );
};
