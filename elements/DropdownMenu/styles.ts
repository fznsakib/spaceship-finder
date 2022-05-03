import styled from "styled-components";

export const Dropdown = styled.div`
  position: absolute;
  min-width: fit-content;

  right: 0;
  margin-top: ${(p) => p.theme.spacing(2)};

  z-index: 100;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 0.25s ease-in-out;
`;

export const BoxContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
