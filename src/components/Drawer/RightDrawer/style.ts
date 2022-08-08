import styled from 'styled-components';
import Drawer from 'react-modern-drawer';

import {
  IconCrossCircleBigSVG,
} from 'components/UI/Icon';

import { theme } from 'theme';

import 'react-modern-drawer/dist/index.css';

export const StyledDrawer = styled(Drawer).attrs(({ size, style }) => ({
  size: size || 360,
  style: style || {
    background: theme.colors.grey3
  }
}))`
`;

export const StyledCloseContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px !important;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledCloseIcon = styled(IconCrossCircleBigSVG)`
  width: 40px;
  height: 40px;
`;
