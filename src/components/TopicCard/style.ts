import styled from 'styled-components';
import { theme } from 'theme';

import Text from 'components/UI/Text';
import { IconCloseSVG } from 'components/UI/Icon';

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 40px;  
  background: ${theme.colors.grey3};
  border-radius: 8px;
  display: grid;
  margin-bottom: 29px;

  &.empty {
    border: 1px dashed ${theme.colors.grey2}; 
    margin: 0;
    background: inherit;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledWrapper = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTopicContainer = styled.div`
  display: flex;
  width: 555px;
`;

export const StyledText = styled(Text)`
  color: ${theme.colors.white};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledEmptyText = styled(Text)`
  color: ${theme.colors.grey2}
`;

export const StyledIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIconClose = styled(IconCloseSVG)`
  width: 20px;
  height: 20px;
`;
