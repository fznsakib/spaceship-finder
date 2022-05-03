import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding: ${(p) => p.theme.spacing(5)} 0;
  border-top: 1px solid ${(p) => p.theme.palette.border};
`;

export const Logo = styled.div`
  margin-top: ${(p) => p.theme.spacing(1)};
  margin-left: ${(p) => p.theme.spacing(1)};
`;
