/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

// Theme
import { theme } from 'theme';

// Enums
import { ButtonVariants } from 'utils/enums/button';

export type ButtonVariant =
  | ButtonVariants.PRIMARY
  | ButtonVariants.SECONDARY
  | ButtonVariants.BORDERLESS
  | ButtonVariants.NONE
  | ButtonVariants.OUTLINE_PRIMARY;

interface ButtonStyledProps {
  $variant: ButtonVariant;
  disabled?: boolean;
  $isLoading?: boolean;
  $fullMinWidth?: number;
}

interface LabelStyledProps {
  $withIcon?: boolean;
}

export const StyledLabel = styled.div<LabelStyledProps>`
  position: relative;
  // Icon enabled
  ${({ $withIcon }) => $withIcon && `
    padding-left: 1.75em;

    & svg {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      z-index: 1;
      box-sizing: border-box;
    }
  `}
`;

const buttonVariantsCSS = {
  [ButtonVariants.PRIMARY]: css`
    // Border
    border-radius: 8px;
    border: 1px solid ${theme.colors.ricciardoYellow};

    // Background
    background-color: ${theme.colors.ricciardoYellow};

    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1rem; // 16px
    line-height: 1rem; // 16px
    > div {
      color: ${theme.colors.black};
    }

    // Icon
    & svg path {
      fill: ${theme.colors.black};
    }
    
    & div:before {
      filter: invert(1) grayscale(1);
    }
      
    &:hover {
      background-color: ${theme.colors.darkRicciardoYellow};
      border-color: ${theme.colors.darkRicciardoYellow};
    };

    &:focus {
      box-shadow: 0px 4px 6px ${theme.colors.alpha.ricciardoYellow500};
    };
  `,
  [ButtonVariants.SECONDARY]: css`
    // Border
    border-radius: 8px;
    border: 1px solid ${theme.colors.ricciardoYellow};

    // Background
    background-color: transparent;

    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.medium};
    font-size: 1rem; // 16px
    line-height: 1rem; // 16px
    color: ${theme.colors.ricciardoYellow};
      
    &:hover {
      color: ${theme.colors.darkRicciardoYellow};
      border-color: ${theme.colors.darkRicciardoYellow};
      & svg path {
        fill: ${theme.colors.darkRicciardoYellow};
      }
    };
  `,
  [ButtonVariants.BORDERLESS]: css`
    // Border
    border: none;

    // Background
    background: none;

    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.medium};
    font-size: 1rem; // 16px
    line-height: 1rem; // 16px
    color: ${theme.colors.ricciardoYellow};

    // Icon
    & svg path {
      fill: ${theme.colors.ricciardoYellow};
    }

    &:hover {
      color: ${theme.colors.darkRicciardoYellow};
      & svg path {
        fill: ${theme.colors.darkRicciardoYellow};
      }
    };
  `,
  [ButtonVariants.NONE]: css`
    padding: 4px;
    
    // Border
    border: none;

    // Background
    background: none;

    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.medium};
    font-size: 0.75rem; // 12px
    line-height: 1rem; // 16px
    text-decoration-line: underline;
    color: ${theme.colors.ricciardoYellow};

    // Icon
    & svg path {
      fill: ${theme.colors.ricciardoYellow};
    }

    &:hover {
      color: ${theme.colors.darkRicciardoYellow};
      & svg path {
        fill: ${theme.colors.darkRicciardoYellow};
      }
    };
  `,
  [ButtonVariants.OUTLINE_PRIMARY]: css`
    // Border
    border-radius: 8px;
    border: 1px solid ${theme.colors.ricciardoYellow};

    // Background
    background-color: transparent;

    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1rem; // 16px
    line-height: 1rem; // 16px
    color: ${theme.colors.ricciardoYellow};

    &:hover {
      color: ${theme.colors.darkRicciardoYellow};
      border-color: ${theme.colors.darkRicciardoYellow};
      & svg path {
        fill: ${theme.colors.darkRicciardoYellow};
      }
    };
  `
};

export const StyledButton = styled.button<ButtonStyledProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%; 
  min-width: 120px;
  min-height: 18px;
  margin: 0 20px;
  padding: 10px 16px;
  cursor: pointer;
  ${({ $fullMinWidth }) => $fullMinWidth
    && `min-width: ${$fullMinWidth}px;`
}
  &.fit-content {
    width: fit-content;
  }

  &.align-left {
    justify-content: flex-start;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  & svg path {
    fill-opacity: 0.9;
  }

  // Disabled State
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    opacity: 0.38;
  `}

  // Loading State
  ${({ $isLoading }) => $isLoading && `
    & svg {
      width: 2em;
      height: 1em;
      transform: scale(2);
    }
  `}

  ${({ $variant }) => buttonVariantsCSS[$variant]}
`;
