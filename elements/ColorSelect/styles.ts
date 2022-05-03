import styled from "styled-components";

type ColorSelectBoxProps = {
  color: string;
  selected: boolean;
};

export const ColorSelectBox = styled.button<ColorSelectBoxProps>`
  cursor: pointer;
  height: 22px;
  width: 22px;
  border: none;
  border-radius: 4px;

  background: ${(p) => p.color};
  color: ${(p) => p.theme.palette.primary};
  transition: box-shadow ease-in-out 0.25s;
  transition: transform ease-in-out 0.25s;
  position: relative;

  ${({ selected }) =>
    selected &&
    `
    transform: translateY(-2px);
    `};

  &:hover {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }
`;

export const SelectedColorIndicator = styled.div`
  position: absolute;
  left: 6px;
  top: 24px;
  height: 2px;
  width: 10px;
  border-radius: 10px;
  background: ${(p) => p.theme.palette.primary};
`;
