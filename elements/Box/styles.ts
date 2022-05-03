import styled from "styled-components";

type PaperProps = {
  outlined?: boolean;
  elevated?: boolean;
};

export const Paper = styled.div<PaperProps>`
  background: ${(p) => p.theme.palette.paper};
  padding: ${(p) => p.theme.spacing(4)};
  border-radius: 8px;
  margin-bottom: ${(p) => p.theme.spacing(5)};

  height: fit-content;
  width: 100%;

  ${({ outlined, theme }) =>
    outlined &&
    `
    border: 1px solid ${theme.palette.border};
    `};

  ${({ elevated }) =>
    elevated &&
    `
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
    `};
`;
