import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background: ${(p) => p.theme.palette.button};
  color: ${(p) => p.theme.palette.primary};
  border: 1px solid ${(p) => p.theme.palette.primary};
  border-radius: 10px;
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(2)};
  transition: ease-in-out 0.1s;

  &:hover {
    background: ${(p) => p.theme.palette.primary};
    color: white;
  }
`;
