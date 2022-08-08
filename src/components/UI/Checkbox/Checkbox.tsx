import React from 'react';

// Enums
import { CheckboxVariants } from 'utils/enums/checkbox';

// Styles
import {
  CheckboxVariant,
  StyledCheckboxMainContainer,
  StyledInput,
  StyledLabel,
} from './style';

interface CheckboxProps {
  id: string;
  className?: string;
  variant?: CheckboxVariant;
  name?: string;
  label: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Checkbox = ({
  id,
  className,
  variant = CheckboxVariants.NORMAL,
  name,
  disabled,
  label,
  onChange,
  onFocus,
  onBlur,
}: CheckboxProps, _ref: React.Ref<HTMLInputElement>) => (
  <StyledCheckboxMainContainer
    className={className}
  >
    <StyledInput
      ref={_ref}
      id={id}
      type="checkbox"
      name={name}
      disabled={disabled}
      $variant={variant}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />

    <StyledLabel
      htmlFor={id}
      className="no-tap-light"
      $variant={variant}
      $disabled={disabled}
    >
      {label}
    </StyledLabel>

  </StyledCheckboxMainContainer>
);

const ForwardedRefCheckbox = React.forwardRef(Checkbox);

export default React.memo(ForwardedRefCheckbox);
