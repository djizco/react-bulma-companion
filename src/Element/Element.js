import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Colors
const colors = [
  'white', 'black', 'light', 'dark',
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'black-bis', 'black-ter',
  'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter',
  'white-ter', 'white-bis',
  'primary-light', 'link-light', 'info-light', 'success-light', 'warning-light', 'danger-light',
  'primary-dark', 'link-dark', 'info-dark', 'success-dark', 'warning-dark', 'danger-dark',
];

// Spacing
const spacings = ['0', '1', '2', '3', '4', '5', '6'];

// Typography
const textSizes = ['1', '2', '3', '4', '5', '6', '7'];
const textAligns = ['center', 'justify', 'left', 'right'];

const textAlignMap = {
  center: 'has-text-centered',
  justify: 'has-text-justified',
  left: 'has-text-left',
  right: 'has-text-right',
};

const textTransforms = ['capitalize', 'lowercase', 'uppercase', 'italic', 'underline'];
const textTransformMap = {
  capitalize: 'is-capitalized',
  lowercase: 'is-lowercase',
  uppercase: 'is-uppercase',
  italic: 'is-italic',
  underline: 'is-underlined',
};

const textWeights = ['light', 'normal', 'medium', 'semibold', 'bold'];
const textWeightMap = {
  light: 'has-text-weight-light',
  normal: 'has-text-weight-normal',
  medium: 'has-text-weight-medium',
  semibold: 'has-text-weight-semibold',
  bold: 'has-text-weight-bold',
};

const fonts = ['sans-serif', 'monospace', 'primary', 'secondary', 'code'];
const fontMap = {
  'sans-serif': 'is-family-sans-serif',
  monospace: 'is-family-monospace',
  primary: 'is-family-primary',
  secondary: 'is-family-secondary',
  code: 'is-family-code',
};

export default function Element({
  children,
  className,
  component,
  domRef,
  backgroundColor,
  textColor,
  textAlign,
  textSize,
  textTransform,
  textWeight,
  font,
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  mobile,
  touch,
  tablet,
  desktop,
  widescreen,
  fullhd,
  ...props
}) {
  const Element = component;

  const isTextAlign = textAlign && textAlignMap[textAlign];
  const isTextTransform = textTransform && textTransformMap[textTransform];
  const hasTextWeight = textWeight && textWeightMap[textWeight];
  const isFont = font && fontMap[font];

  const classes = classNames(
    className,
    isTextAlign,
    isTextTransform,
    hasTextWeight,
    isFont,
    {
      [`has-background-${backgroundColor}`]: !!backgroundColor,
      [`has-text-${textColor}`]: !!textColor,
      [`m-${m}`]: !!m,
      [`mt-${mt}`]: !!mt,
      [`mr-${mr}`]: !!mr,
      [`mb-${mb}`]: !!mb,
      [`ml-${ml}`]: !!ml,
      [`mx-${mx}`]: !!mx,
      [`my-${my}`]: !!my,
      [`p-${p}`]: !!p,
      [`pt-${pt}`]: !!pt,
      [`pr-${pr}`]: !!pr,
      [`pb-${pb}`]: !!pb,
      [`pl-${pl}`]: !!pl,
      [`px-${px}`]: !!px,
      [`py-${py}`]: !!py,
      [`is-size-${mobile.textSize}-mobile`]: !!mobile.textSize,
      [`is-size-${touch.textSize}-touch`]: !!touch.textSize,
      [`is-size-${tablet.textSize}-tablet`]: !!tablet.textSize,
      [`is-size-${desktop.textSize}-desktop`]: !!desktop.textSize,
      [`is-size-${widescreen.textSize}-widescreen`]: !!widescreen.textSize,
      [`is-size-${fullhd.textSize}-fullhd`]: !!fullhd.textSize,
      [`${textAlignMap[mobile.textAlign]}-mobile`]:
        !!mobile.textAlign && textAligns.includes(mobile.textAlign),
      [`${textAlignMap[touch.textAlign]}-touch`]:
        !!touch.textAlign && textAligns.includes(touch.textAlign),
      [`${textAlignMap[tablet.textAlign]}-tablet-only`]:
        !!tablet.textAlign && tablet.only && textAligns.includes(tablet.textAlign),
      [`${textAlignMap[tablet.textAlign]}-tablet`]:
        !!tablet.textAlign && !tablet.only && textAligns.includes(tablet.textAlign),
      [`${textAlignMap[desktop.textAlign]}-desktop-only`]:
        !!desktop.textAlign && desktop.only && textAligns.includes(desktop.textAlign),
      [`${textAlignMap[desktop.textAlign]}-desktop`]:
        !!desktop.textAlign && !desktop.only && textAligns.includes(desktop.textAlign),
      [`${textAlignMap[widescreen.textAlign]}-widescreen-only`]:
        !!widescreen.textAlign && widescreen.only && textAligns.includes(widescreen.textAlign),
      [`${textAlignMap[widescreen.textAlign]}-widescreen`]:
        !!widescreen.textAlign && !widescreen.only && textAligns.includes(widescreen.textAlign),
      [`${textAlignMap[fullhd.textAlign]}-fullhd`]:
        !!fullhd.textAlign && textAligns.includes(fullhd.textAlign),
    },
  );

  return (
    <Element ref={domRef} className={classes} {...props}>
      {children}
    </Element>
  );
}

Element.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  domRef: PropTypes.object,
  backgroundColor: PropTypes.oneOfType([
    PropTypes.oneOf(colors),
    PropTypes.string,
  ]),
  textColor: PropTypes.oneOfType([
    PropTypes.oneOf(colors),
    PropTypes.string,
  ]),
  textSize: PropTypes.oneOf(textSizes),
  textAlign: PropTypes.oneOf(textAligns),
  textTransform: PropTypes.oneOf(textTransforms),
  textWeight: PropTypes.oneOf(textWeights),
  font: PropTypes.oneOf(fonts),
  m: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  mt: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  mr: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  ml: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  my: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  p: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  pt: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  pr: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  pb: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  pl: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  px: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  py: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  mobile: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
  }),
  touch: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
  }),
  tablet: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    only: PropTypes.bool,
  }),
  desktop: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    only: PropTypes.bool,
  }),
  widescreen: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    only: PropTypes.bool,
  }),
  fullhd: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
  }),
};

Element.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  domRef: undefined,
  backgroundColor: undefined,
  textColor: undefined,
  textSize: undefined,
  textAlign: undefined,
  textTransform: undefined,
  textWeight: undefined,
  font: undefined,
  m: undefined,
  mt: undefined,
  mr: undefined,
  mb: undefined,
  ml: undefined,
  mx: undefined,
  my: undefined,
  p: undefined,
  pt: undefined,
  pr: undefined,
  pb: undefined,
  pl: undefined,
  px: undefined,
  py: undefined,
  mobile: {},
  touch: {},
  tablet: {},
  desktop: {},
  widescreen: {},
  fullhd: {},
};
