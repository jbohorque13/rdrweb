import React from 'react';

// Components
import { IconYellowBkgEllipsisSVG, IconBlackBkgEllipsisSVG } from 'components/UI/Icon';

// Enums
import { ButtonVariants } from 'utils/enums/button';

// Styles
import {
  ButtonVariant,
  StyledButton,
  StyledLabel,
} from './style';

interface ButtonProps {
  className?: string;
  variant?: ButtonVariant;
  name?: string;
  label: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  loading?: boolean;
  fullMinWidth?: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  className,
  variant = ButtonVariants.PRIMARY,
  name,
  disabled,
  label,
  icon,
  type = 'button',
  loading = false,
  fullMinWidth,
  onClick,
}: ButtonProps) => {
  const LoadingIcon = () => (
    <>
      {variant && variant === ButtonVariants.PRIMARY ? <IconBlackBkgEllipsisSVG /> : <IconYellowBkgEllipsisSVG />}
    </>
  );

  return (
    <StyledButton
      name={name}
      type={type}
      onClick={onClick}
      $variant={variant}
      disabled={disabled}
      $isLoading={loading}
      $fullMinWidth={fullMinWidth}
      className={className}
    >
      {loading ? <LoadingIcon /> : (
        <StyledLabel
          $withIcon={!!icon}
        >
          {icon}
          {label}
        </StyledLabel>
      )}
    </StyledButton>
  );
};

export default React.memo(Button);
