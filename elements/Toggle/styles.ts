import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ToggleLabel = styled.p`
  margin: 0 ${(p) => p.theme.spacing(4)} 0 0;
`;

type ToggleProps = {
  selected: boolean;
};

export const ToggleBackground = styled.div<ToggleProps>`
  cursor: pointer;
  background: lightgray;

  height: 20px;
  width: 40px;
  border-radius: 10px;
  transition: ease-in-out 0.1s;

  ${({ selected, theme }) =>
    selected &&
    `
    background: ${theme.palette.primary};
    `};
`;

export const ToggleSwitch = styled.div<ToggleProps>`
  position: relative;
  top: 2px;
  left: 2px;
  height: 16px;
  width: 16px;

  background: white;
  border-radius: 100px;

  transition: ease-in-out 0.25s;

  ${({ selected }) =>
    selected &&
    `
    transform: translateX(20px);
    `};
`;
