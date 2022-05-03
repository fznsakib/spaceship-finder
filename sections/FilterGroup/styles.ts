import styled from "styled-components";

export const FilterGroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${(p) => p.theme.spacing(2)};

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PulseLaserToggleContainer = styled.div`
  padding: 10px;
  font-size: 14px;
`;

export const QueryStringContainer = styled.h1`
  height: 200px;
`;
