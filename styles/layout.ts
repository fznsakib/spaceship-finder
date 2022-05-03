import styled from "styled-components";

export const MainContainer = styled.div`
  background: ${(p) => p.theme.palette.background};
  padding: 0 ${(p) => p.theme.spacing(5)};
`;

export const ContentContainer = styled.div`
  min-height: 90vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${(p) => p.theme.spacing(12)} 0;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    padding: ${(p) => p.theme.spacing(12)} ${(p) => p.theme.spacing(18)};
  }
  @media (min-width: ${(p) => p.theme.breakpoints.lg}) {
    padding: ${(p) => p.theme.spacing(12)} ${(p) => p.theme.spacing(24)};
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    width: 100%;
    flex-direction: column;
  }
`;
