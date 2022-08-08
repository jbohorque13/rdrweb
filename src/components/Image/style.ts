import styled from 'styled-components';

import {
  IconCloseSVG,
} from 'components/UI/Icon';

import { theme } from 'theme';

export const StyledContainerAvatar = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  width: 115px;
  min-width: 115px;
  height: 115px;
  margin-right: 20px;

  &.cover {
    width: 290px;
    height: 305px;
    margin-right: 0;

    #placeholder {
      background-color: ${theme.colors.grey3};
      border: none;
    }
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  
`;

export const StyledRemoveImageContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  cursor: pointer;
`;

export const StyledCloseIcon = styled(IconCloseSVG)`
  width: 24px;
  height: 24px;
`;

export const StyledPlaceholder = styled.div`
  background-color: transparent;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${theme.colors.grey2};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
