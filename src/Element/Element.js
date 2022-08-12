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

const displays = ['block', 'flex', 'inline', 'inline-block', 'inline-flex'];
const displayMap = {
  block: 'is-block',
  flex: 'is-flex',
  inline: 'is-inline',
  'inline-block': 'is-inline-block',
  'inline-flex': 'is-inline-flex',
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
  display,
  invisible,
  hidden,
  screenReaderOnly,
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
  const isDisplay = display && displayMap[display];

  const classes = classNames(
    className,
    isTextAlign,
    isTextTransform,
    hasTextWeight,
    isFont,
    isDisplay,
    {
      [`has-background-${backgroundColor}`]: !!backgroundColor,
      [`has-text-${textColor}`]: !!textColor,

      // Margin and Padding
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

      // Responsive Text Size
      [`is-size-${mobile.textSize}-mobile`]: !!mobile.textSize && textSizes.includes(mobile.textSize),
      [`is-size-${touch.textSize}-touch`]: !!touch.textSize && textSizes.includes(touch.textSize),
      [`is-size-${tablet.textSize}-tablet`]: !!tablet.textSize && textSizes.includes(tablet.textSize),
      [`is-size-${desktop.textSize}-desktop`]: !!desktop.textSize && textSizes.includes(desktop.textSize),
      [`is-size-${widescreen.textSize}-widescreen`]: !!widescreen.textSize && textSizes.includes(widescreen.textSize),
      [`is-size-${fullhd.textSize}-fullhd`]: !!fullhd.textSize && textSizes.includes(fullhd.textSize),

      // Responsive Text Align
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

      // Responsive Display
      [`${displayMap[mobile.display]}-mobile`]:
        !!mobile.display && displays.includes(mobile.display),
      [`${displayMap[touch.display]}-touch`]:
        !!touch.display && displays.includes(touch.display),
      [`${displayMap[tablet.display]}-tablet-only`]:
        !!tablet.display && tablet.only && displays.includes(tablet.display),
      [`${displayMap[tablet.display]}-tablet`]:
        !!tablet.display && !tablet.only && displays.includes(tablet.display),
      [`${displayMap[desktop.display]}-desktop-only`]:
        !!desktop.display && desktop.only && displays.includes(desktop.display),
      [`${displayMap[desktop.display]}-desktop`]:
        !!desktop.display && !desktop.only && displays.includes(desktop.display),
      [`${displayMap[widescreen.display]}-widescreen-only`]:
        !!widescreen.display && widescreen.only && displays.includes(widescreen.display),
      [`${displayMap[widescreen.display]}-widescreen`]:
        !!widescreen.display && !widescreen.only && displays.includes(widescreen.display),
      [`${displayMap[fullhd.display]}-fullhd`]:
        !!fullhd.display && displays.includes(fullhd.display),

      'is-hidden-mobile': mobile.hidden,
      'is-hidden-touch': touch.hidden,
      'is-hidden-tablet-only': tablet.hidden && tablet.only,
      'is-hidden-tablet': tablet.hidden && !tablet.only,
      'is-hidden-desktop-only': desktop.hidden && desktop.only,
      'is-hidden-desktop': desktop.hidden && !desktop.only,
      'is-hidden-widescreen-only': widescreen.hidden && widescreen.only,
      'is-hidden-widescreen': widescreen.hidden && !widescreen.only,
      'is-hidden-fullhd': fullhd.hidden,

      'is-invisible': invisible,
      'is-hidden': hidden,
      'is-sr-only': screenReaderOnly,
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
  display: PropTypes.oneOf(displays),
  invisible: PropTypes.bool,
  hidden: PropTypes.bool,
  screenReaderOnly: PropTypes.bool,
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
    display: PropTypes.oneOf(displays),
    hidden: PropTypes.bool,
  }),
  touch: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    display: PropTypes.oneOf(displays),
    hidden: PropTypes.bool,
  }),
  tablet: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    display: PropTypes.oneOf(displays),
    hidden: PropTypes.bool,
    only: PropTypes.bool,
  }),
  desktop: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    display: PropTypes.oneOf(displays),
    hidden: PropTypes.bool,
    only: PropTypes.bool,
  }),
  widescreen: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    display: PropTypes.oneOf(displays),
    hidden: PropTypes.bool,
    only: PropTypes.bool,
  }),
  fullhd: PropTypes.shape({
    textSize: PropTypes.oneOf(textSizes),
    textAlign: PropTypes.oneOf(textAligns),
    display: PropTypes.oneOf(displays),
    hidden: PropTypes.bool,
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
  display: undefined,
  invisible: false,
  hidden: false,
  screenReaderOnly: false,
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
