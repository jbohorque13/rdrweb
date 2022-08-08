/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

// Theme
import { theme } from 'theme';

// Images
import CheckboxTickSVG from 'assets/icons/checkbox-tick.svg';

// Enums
import { CheckboxVariants } from 'utils/enums/checkbox';

export type CheckboxVariant = CheckboxVariants.NORMAL;

interface InputStyledProps {
  $variant: CheckboxVariant;
  $disabled?: boolean;
}

export const StyledCheckboxMainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4px;
`;

const inputLabelVariantsCSS = {
  [CheckboxVariants.NORMAL]: css`
    // Font
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 0.75rem; // 12px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
    
    // Spacing
    padding-left: 12px;
  `,
};

export const StyledLabel = styled.label<InputStyledProps>`
  display: block;
  cursor: pointer;

  // Transitions
  transition: color 0.25s;

  // Disabled State
  ${({ $disabled }) => $disabled && `
    cursor: not-allowed;
  `}

  ${({ $variant }) => inputLabelVariantsCSS[$variant]}
`;

const inputVariantsCSS = {
  [CheckboxVariants.NORMAL]: css`
    // Size
    width: 18px;
    min-width: 18px;
    height: 18px;

    // Border
    border-radius: 4px;
    border: 1px solid ${theme.colors.ricciardoYellow};
    
    // Background
    background-color: ${theme.colors.alpha.darkGrey600};

    // Checked State
    &:checked {
      border: none;
      background-color: transparent;

      &:after {
        content: url(${CheckboxTickSVG});
        background-color: black;
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }

    // Disabled State
    &:disabled {
      cursor: not-allowed;
    }
  `,
};

export const StyledInput = styled.input<InputStyledProps>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  outline: none !important;
  cursor: pointer;  

  // Remove browser style
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  ${({ $variant }) => inputVariantsCSS[$variant]}
`;
