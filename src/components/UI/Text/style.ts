/* eslint-disable import/no-named-as-default-member */
import { DOMAttributes } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// Theme
import { theme } from 'theme';

const minMediaQueries = [
  theme.mediaQueries.minMobile,
  theme.mediaQueries.minTablet,
  theme.mediaQueries.minBigTablet,
  theme.mediaQueries.minSmallDesktop,
  theme.mediaQueries.minDesktop,
  theme.mediaQueries.minFullwidth,
];

export interface ConfigurationVariant {
  fontFamily: 'QANELAS' | 'INTER' | 'MULISH';
  fontWeight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  fontSize: '12' | '15' | '20' | '30' | '40' | '50' | '80' | '120';
  lineHeight: '15' | '20' | '30' | '40' | '50' | '60' | '80' | '120',
}

export const cssVariants = {
  // Qanelas font Sans
  'QANELAS-12-18-600': css`
    font-family: ${theme.fontNames.qanelas};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 0.75rem // 12px
    line-height: 1.125rem; // 18px
    color: ${theme.colors.white};
  `,
  'QANELAS-14-28-600': css`
    font-family: ${theme.fontNames.qanelas};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 0.875rem; // 14px
    line-height: 1.75rem; // 28px
    color: ${theme.colors.white};
  `,
  'QANELAS-16-22-600': css`
    font-family: ${theme.fontNames.qanelas};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
    color: ${theme.colors.white};
  `,
  'QANELAS-18-22-600': css`
    font-family: ${theme.fontNames.qanelas};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1.125rem; // 18px
    line-height: 1.375rem; // 22px
    color: ${theme.colors.white};
  `,
  'QANELAS-18-24-600': css`
    font-family: ${theme.fontNames.qanelas};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1.125rem; // 18px
    line-height: 1.5rem; // 24px
    color: ${theme.colors.white};
  `,
  'QANELAS-28-32-600': css`
    font-family: ${theme.fontNames.qanelas};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1.75rem; // 28px
    line-height: 2rem; // 32px
    color: ${theme.colors.white};
  `,
  // Inter font Sans
  'INTER-11-13-400': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 0.688rem; // 11px
    line-height: 0.813rem; // 13px
    color: ${theme.colors.white};
  `,
  'INTER-12-16-400': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 0.75rem; // 12px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
  `,
  'INTER-12-14-600': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 0.75rem; // 12px
    line-height: 0.875rem; // 14px
    color: ${theme.colors.white};
  `,
  'INTER-14-16-400': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 0.875rem; // 14px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
  `,
  'INTER-14-16-500': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.medium};
    font-size: 0.875rem; // 14px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
  `,
  'INTER-14-16-700': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.extraBold};
    font-size: 0.875rem; // 14px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
  `,
  'INTER-14-20-400': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 0.875rem; // 14px
    line-height: 20px; // 20px
    color: ${theme.colors.white};
  `,
  'INTER-16-16-400': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.normal};
    font-size: 1rem; // 16px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
  `,
  'INTER-16-19-500': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.medium};
    font-size: 1rem; // 16px
    line-height: 1.1875rem; // 19px
    color: ${theme.colors.white};
  `,
  'INTER-16-18-600': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1rem; // 16px
    line-height: 1.125rem; // 18px
    color: ${theme.colors.white};
  `,
  'INTER-24-28-600': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 1.5rem; // 24px
    line-height: 1.75rem; // 28px
    color: ${theme.colors.white};
  `,
  'INTER-32-38-700': css`
    font-family: ${theme.fontNames.inter};
    font-weight: ${theme.fontWeights.bold};
    font-size: 2rem; // 32px
    line-height: 2.375rem; // 38px
    color: ${theme.colors.white};
  `,
  // Mulish font Sans
  'MULISH-10-13-700': css`
    font-family: ${theme.fontNames.mulish};
    font-weight: ${theme.fontWeights.bold};
    font-size: 0.625rem; // 10px
    line-height: 0.8125rem; // 13px
    color: ${theme.colors.white};
  `,
  'MULISH-13-16-400': css`
    font-family: ${theme.fontNames.mulish};
    font-weight: ${theme.fontWeights.normal};
    font-size: 0.8125rem; // 13px
    line-height: 1rem; // 16px
    color: ${theme.colors.white};
  `,
  'MULISH-14-16-600': css`
    font-family: ${theme.fontNames.mulish};
    font-weight: ${theme.fontWeights.semiBold};
    font-size: 0.875rem; // 14px
    line-height: 1.25rem;
    color: ${theme.colors.white};
  `,
};
type TextVariantId = keyof typeof cssVariants;
export type TextVariants = TextVariantId | ConfigurationVariant;

const cssGradientsCommonCss = css`
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const cssGradients = {
  WARM: css`
    /* Fallback: Set a background color. */
    background-color: ${theme.gradients.warm.fallback};
    
    /* Create the gradient. */
    background-image: ${theme.gradients.warm.value};
    
    ${cssGradientsCommonCss}
  `,
  GREEN: css`
    /* Fallback: Set a background color. */
    background-color: ${theme.gradients.green.fallback};
    
    /* Create the gradient. */
    background-image: ${theme.gradients.green.value};
    
    ${cssGradientsCommonCss}
  `,
};
type TextGradientVariantId = keyof typeof cssGradients;
export type TextGradientVariants = TextGradientVariantId;

export interface TextProps extends DOMAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  variant?: TextVariants;
  variants?: (TextVariants | null)[];
  textGradient?: TextGradientVariants;
}

// Mapping to change the DOM type (tag to use instead of div)
const matching: CommonJSON<string> = {
  // 'DM-12-15-400': 'h1',
};

const getTextId = function getTextId(variant: TextVariants) {
  if (typeof variant === 'string') {
    return variant as TextVariantId;
  }
  return `${variant.fontFamily}-${variant.fontSize}-${variant.lineHeight}-${variant.fontWeight}` as TextVariantId;
};

const matchVariant = function matchVariant(props: TextProps) {
  if (props.variant && matching[getTextId(props.variant)]) {
    return { as: matching[getTextId(props.variant)] };
  }
  return { as: 'div' };
};

// Show error when the Text Id doesn't match
const errorCss = css`
  color: ${theme.colors.leclercRed};
  outline: dashed ${theme.colors.leclercRed};
`;

export const getVariantCSS = function getVariantCSS(variant: TextVariants) {
  const textId = getTextId(variant);
  const targetCssVariant = cssVariants[textId];
  return css`${targetCssVariant || errorCss}`;
};

const getVariantsCSS = function getVariantsCSS(variants: (TextVariants | null)[]) {
  return variants.reduce((pV, cV, idx) => {
    if (!cV) {
      return pV;
    }
    const variantCSS = getVariantCSS(cV);
    const mediaQuery = minMediaQueries[idx];
    const outVariantCSS = css`
      ${pV}
      ${mediaQuery} {
        ${variantCSS}
      }
    `;
    return outVariantCSS;
  }, css``);
};

const injectGradient = function injectGradient(gradientId: TextGradientVariants) {
  const targetCssVariant = cssGradients[gradientId];
  return css`${targetCssVariant}`;
};

export const StyledText = styled.div.attrs(matchVariant)<{
  variant?: TextVariants,
  variants?: (TextVariants | null)[],
  textGradient?: TextGradientVariants,
}>`
  ${props => {
    let out: FlattenSimpleInterpolation | '' = '';
    if (props.variant) {
      out = getVariantCSS(props.variant);
    } if (props.variants && props.variants.length > 0) {
      out = getVariantsCSS(props.variants);
    }
    if (props.textGradient) {
      out = css`
        ${out}
        ${injectGradient(props.textGradient)}
      `;
    }
    return out;
  }}
`;
