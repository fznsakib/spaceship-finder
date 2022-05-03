import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
`;

export const OperationSelect = styled.select`
  padding: 4px;
  border-radius: 4px;
  margin-bottom: ${(p) => p.theme.spacing(3)};
`;

export const ValueInput = styled.input`
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.palette.primary};
  text-align: center;
  margin-bottom: ${(p) => p.theme.spacing(3)};
`;

export const ValueText = styled.p`
  text-align: center;
  margin: 0 0 ${(p) => p.theme.spacing(3)} 0;
`;

export const DropdownContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
