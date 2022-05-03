import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
`;

export const ColorPickerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${(p) => p.theme.spacing(2)};

  margin-bottom: ${(p) => p.theme.spacing(3)};
`;
