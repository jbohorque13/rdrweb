import React from 'react';
import classNames from 'classnames';
import { ContainerProps as RGContainerProps } from 'react-grid-system';

// Styles
import {
  StyledContainer,
} from './style';

interface ContainerProps extends React.PropsWithChildren<RGContainerProps> {
  className?: string;
  honorDesign?: boolean;
}

const Container = function Container({
  className,
  children,
  honorDesign = true,
  ...rest
}: ContainerProps, _ref: any) {
  return (
    <StyledContainer
      {...rest}
      ref={_ref}
      className={classNames('Container', className)}
      $honorDesign={honorDesign}
    >
      {children}
    </StyledContainer>
  );
};

const ContainerWithForwardedRef = React.forwardRef(Container);

export default React.memo(ContainerWithForwardedRef);
