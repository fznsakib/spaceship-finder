import styled from "styled-components";

type FilterButtonProps = {
  filterActive: boolean;
};

export const FilterButton = styled.button<FilterButtonProps>`
  cursor: pointer;
  background: white;
  border-radius: 50px;
  padding: 10px 10px;
  transition: ease-in-out 0.1s;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${(p) => (p.filterActive ? "black" : "lightgrey")};
  &:hover {
    border: 1px solid ${(p) => (p.filterActive ? "black" : "darkgrey")};
  }
`;

export const FilterLabel = styled.p`
  margin: 0 0 0 ${(p) => p.theme.spacing(1)};
  text-align: left;
`;

type FilterIconProps = {
  open: boolean;
};

export const FilterIcon = styled.div<FilterIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: ${(p) => p.theme.spacing(4)};
  transition: ease-in-out 0.25s;

  ${({ open }) => open && `transform: rotate(180deg);`};
`;
