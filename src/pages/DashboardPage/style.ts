import styled from 'styled-components';
import { theme } from 'theme';

// Components
import Text from 'components/UI/Text';

export const PageMainContainer = styled.div`
  flex: 1;
  max-width: ${theme.pageContainerWidth}px;
`;

export const StyledTempText = styled(Text)`
  text-align: center;
`;
