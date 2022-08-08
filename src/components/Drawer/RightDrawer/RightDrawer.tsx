import React from 'react';

// Styles
import {
  StyledCloseContainer,
  StyledCloseIcon,
  StyledDrawer,
} from './style';

interface RightDrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: number,
  style?: React.CSSProperties
  iconCloseComponent?: React.ReactNode,
}

const RightDrawer = ({
  children,
  isOpen,
  onClose,
  width,
  style,
  iconCloseComponent
}: React.PropsWithChildren<RightDrawerProps>) => (
  <StyledDrawer
    open={isOpen}
    direction="right"
    onClose={onClose}
    size={width}
    style={style}
  >
    <StyledCloseContainer onClick={onClose}>
      { iconCloseComponent || <StyledCloseIcon /> }
    </StyledCloseContainer>
    {children}
  </StyledDrawer>
);

export default React.memo(RightDrawer);
