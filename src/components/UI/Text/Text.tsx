import React from 'react';

// Styles
import { StyledText, TextProps } from './style';

const Text = ({
  id,
  className,
  variant,
  variants,
  children,
  ...rest
}: TextProps, _ref: React.Ref<HTMLDivElement>) => (
  <StyledText
    {...rest}
    ref={_ref}
    id={id}
    className={className}
    variant={variant}
    variants={variants}
  >
    {children}
  </StyledText>
);

const ForwardedRefText = React.forwardRef(Text);

export default React.memo(ForwardedRefText);
