import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { theme } from 'theme';

// Components
import Text from 'components/UI/Text';
import {
  IconColiseumLogo1SVG,
} from 'components/UI/Icon';

export const StyledSideMenuContainer = styled.div`
  max-width: 290px;
  width: 100%;
  flex: 1;
  background-color: ${theme.colors.grey};
  display: flex;
  flex-direction: column;
`;

export const StyledLogoContainer = styled(Link)`
  padding: 28px 24px;
  text-decoration: none !important;
  display: block;
`;

export const StyledColiseumLogo = styled(IconColiseumLogo1SVG)`
  width: 160px;
  height: 23px;
`;

export const StyledPagesContainer = styled.div`
  flex: 1;
`;

export const StyledBottomOptionsContainer = styled.div``;

export const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 14px;
  min-height: 46px;
  margin: 0 5px;
  text-decoration: none !important;

  &.active-nav-item {
    > .nav-item-icon-container {
      > svg {
        &.active-nav-item-icon-active {
          opacity: 1;
        }

        &.active-nav-item-icon-not-active {
          opacity: 0;
        }
      }
    }

    > .nav-item-text {
      color: ${theme.colors.ricciardoYellow};
    }
  }
  
  &:hover{
    background: ${theme.colors.alpha.white200};
    border-radius: 8px;
  }
`;

export const StyledNavItemIconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  position: relative;

  > svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: opacity 0.25s;

    &.active-nav-item-icon-active {
      opacity: 0;
    }

    &.active-nav-item-icon-not-active {
      opacity: 1;
    }
  }
`;

export const StyledNavItemText = styled(Text)`
  color: ${theme.colors.white};
  transition: color 0.25s;
`;

export const StyledTitleSideMenu = styled.h2`
    color: ${theme.colors.white};
    padding: 0 16px;
    padding-left: 32px;
    margin: 12px 0;
`;
