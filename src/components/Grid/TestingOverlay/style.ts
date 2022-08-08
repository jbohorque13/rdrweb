import styled from 'styled-components';
import { theme } from 'theme';

// Components
import Container from 'components/Grid/Container';

export const StyledContainer = styled(Container)`
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  pointer-events: none;
`;

export const FillableItem = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.leclercRed};
`;
