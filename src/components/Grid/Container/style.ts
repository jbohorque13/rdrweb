import styled from 'styled-components';
import { Container as RGContainer } from 'react-grid-system';

export const StyledContainer = styled(RGContainer)<{ $honorDesign?: boolean }>`
  width: 100%;

  ${({ $honorDesign }) => $honorDesign && `
    padding-left: 24px !important;
    padding-right: 24px !important;
  `}
`;
