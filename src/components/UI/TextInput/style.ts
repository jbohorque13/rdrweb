/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

// Theme
import { theme } from 'theme';

// Components
import Text from 'components/UI/Text';
import {
  IconCrossCircleSVG,
  IconEyeOpenSVG,
  IconEyeClosedSVG,
  IconValidTickCircleSVG,
} from 'components/UI/Icon';

// Enums
import { TextInputVariants } from 'utils/enums/textInput';

export type TextInputVariant = TextInputVariants.NORMAL | TextInputVariants.SEARCH;

interface InputStyledProps {
  $variant: TextInputVariant;
  $error?: boolean;
  $valid?: boolean;
  $disabled?: boolean;
  $withLeftIcon?: boolean;
  $withRightIcon?: boolean;
}

export const StyledInputMainContainer = styled.div`
  position: relative;
  width: 100%;
`;

const inputLabelVariantsCSS = {
  [TextInputVariants.NORMAL]: ($disabled?: boolean) => css`
    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 0.875rem; // 14px
    line-height: 1rem; // 20px
    color: ${theme.colors.white};
    transition: color 0.25s;
    
    // Spacing
    margin-bottom: 4px;
    padding: 0px 16px;

    ${$disabled && `
      color: ${theme.colors.alpha.white600};
    `}
  `,
  [TextInputVariants.SEARCH]: ($disabled?: boolean) => css`
  // Font
  font-family: ${theme.fontNames.inter};
  font-weight: ${theme.fontWeights.normal};
  font-size: 0.875rem; // 14px
  line-height: 1rem; // 20px
  color: ${theme.colors.white};
  transition: color 0.25s;
  
  // Spacing
  margin-bottom: 4px;
  padding: 0px 16px;

  ${$disabled && `
    color: ${theme.colors.alpha.white600};
  `}
`,
};

export const StyledLabel = styled.label<InputStyledProps>`
  display: block;

  // Transitions
  transition: color 0.25s;

  ${({ $variant, $disabled }) => inputLabelVariantsCSS[$variant]($disabled)}
`;

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const inputVariantsCSS = {
  [TextInputVariants.NORMAL]: ({
    $error,
    $withLeftIcon,
    $withRightIcon,
  }: {
    $error?: boolean;
    $valid?: boolean;
    $withLeftIcon?: boolean;
    $withRightIcon?: boolean;
  }) => css`
    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 1rem; // 16px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};

    // Border
    border-radius: 8px;
    border: 1px solid ${theme.colors.grey2};
    
    // Background
    background-color: ${theme.colors.grey};

    // Spacing
    padding: 10px 16px 11px;

    // Caret
    caret-color: ${theme.colors.ricciardoYellow};

    // Selection
    &::selection {
      color: ${theme.colors.black};
      background: ${theme.colors.ricciardoYellow};
    }

    // Placeholder
    &::placeholder {
      color: ${theme.colors.grey2};
      opacity: 1;
      transition: opacity 0.25s;
    }

    // Transitions
    transition: border-color 0.25s;

    /* Autofill State */
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px ${theme.colors.grey} inset !important;
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.grey} inset !important;
      -webkit-text-fill-color: ${theme.colors.white};
      caret-color: ${theme.colors.ricciardoYellow};
      border-color: ${theme.colors.grey2};
    }

    // Focus State
    &:focus,
    &:active {
      border-color: ${theme.colors.ricciardoYellow};

      &:not(:disabled) {
        &::placeholder {
          opacity: 0;
        }
      }
    }

    // Disabled State
    &:disabled {
      color: ${theme.colors.grey2} !important;
      border-color: transparent !important;
      cursor: not-allowed;
      opacity: 0.5;
    }

    // Error State
    ${$error && `
      border-color: ${theme.colors.leclercRed} !important;
    `}

    // Left Icon
    ${$withLeftIcon && `
      padding-left: 45px;
    `}

    // Right Icon
    ${($withRightIcon) && `
      padding-right: 52px;
    `}
  `,
  [TextInputVariants.SEARCH]: ({
    $withLeftIcon,
    $withRightIcon,
  }: {
    $withLeftIcon?: boolean;
    $withRightIcon?: boolean;
  }) => css`
    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 1rem; // 16px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
    min-width: 220px;
    // Border
    border: 0;
    border-bottom: 2px solid ${theme.colors.grey3};
    
    // Background
    background-color: transparent;

    // Spacing
    padding: 5px 0;
    margin: 0;

    // Selection
    &::selection {
      color: ${theme.colors.black};
      background: ${theme.colors.ricciardoYellow};
    }

    // Placeholder
    &::placeholder {
      color: ${theme.colors.grey2};
      transition: opacity 0.25s;
    }

    // Transitions
    transition: border-color 0.25s;

    /* Autofill State */
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px ${theme.colors.grey} inset !important;
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.grey} inset !important;
      -webkit-text-fill-color: ${theme.colors.white};
      caret-color: ${theme.colors.ricciardoYellow};
      border-color: transparent;
    }
    
    // Focus State
    &:focus,
    &:active {

      &:not(:disabled) {
        &::placeholder {
          opacity: 0;
        }
      }
    }

    // Disabled State
    &:disabled {
      color: ${theme.colors.grey2} !important;
      border-color: transparent !important;
      cursor: not-allowed;
      opacity: 0.5;
    }

    // Left Icon
    ${$withLeftIcon && `
      padding-left: 28px;
    `}

    // Right Icon
    ${($withRightIcon) && `
      padding-right: 28px;
    `}
  `,
};

export const StyledInput = styled.input<InputStyledProps>`
  width: 100%;
  box-sizing: border-box;
  outline: none !important;

  ${({
    $variant,
    $error,
    $valid,
    $withLeftIcon,
    $withRightIcon,
  }) => inputVariantsCSS[$variant]({
    $error,
    $valid,
    $withLeftIcon,
    $withRightIcon,
  })}
`;

export const StyledTextArea = styled.textarea<InputStyledProps>`
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  outline: none !important;
  
  ${({
    $variant,
    $error,
    $valid,
  }) => inputVariantsCSS[$variant]({
    $error,
    $valid,
  })}
`;

export const StyledLeftIconContainer = styled.div<{
  $isSearch?: boolean;
  $disabled?: boolean;
}>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  pointer-events: none;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $disabled, $isSearch }) => ($disabled ? `
    opacity: 0.5;
  ` : $isSearch ? `
    left: 0;
  ` : '')}
`;

export const StyledRightIconContainer = styled.div<{
  $error?: boolean;
  $valid?: boolean;
  $isPassword?: boolean;
  $disabled?: boolean;
  $withRightIcon?: boolean;
  $isSearch?: boolean;
}>`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.25s;
  pointer-events: none;
  z-index: 1;

  ${({
    $error,
    $valid,
    $isPassword,
    $withRightIcon,
  }) => (($error || $isPassword) ? `
    pointer-events: all;
    cursor: pointer;
    opacity: 1;
  ` : ($withRightIcon || $valid) ? `
    opacity: 1;
  ` : `
    display: none;
  `)}
  
  ${({ $isSearch }) => $isSearch && `
    pointer-events: all;
    cursor: pointer;
    right: 0px;
  `}

  ${({ $disabled }) => $disabled && `
    pointer-events: none !important;
  `}
`;

export const StyledErrorLabel = styled(Text)`
  color: ${theme.colors.leclercRed};
  margin-top: 4px;
  padding: 0px 17px;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledErrorIcon = styled(IconCrossCircleSVG)`
  > g {
    opacity: 1;

    > path {
      fill: ${theme.colors.leclercRed};
    }
  }
`;

export const StyledValidIcon = styled(IconValidTickCircleSVG)``;

export const StyledEyesIconVisible = styled(IconEyeOpenSVG)`
  width: 24px;
  height: 24px;
`;

export const StyledEyesIconNotVisible = styled(IconEyeClosedSVG)`
  width: 24px;
  height: 24px;
`;

export const StyledCharCounterSpan = styled.span`
  font-weigth: ${theme.fontWeights.normal};
  font-size: 12px;
  font-family: ${theme.fontNames.inter};
  color: ${theme.colors.grey2};
`;

export const StyledCounterCharacterContainer = styled.div`
  float:right;
  padding-top: 4px;
`;
