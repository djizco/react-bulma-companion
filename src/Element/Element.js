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
const spacings = ['0', '1', '2', '3', '4', '5', '6', 'auto'];

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

// Visibility
const displays = ['block', 'flex', 'inline', 'inline-block', 'inline-flex'];
const displayMap = {
  block: 'is-block',
  flex: 'is-flex',
  inline: 'is-inline',
  'inline-block': 'is-inline-block',
  'inline-flex': 'is-inline-flex',
};

// Flex
const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
const flexDirectionMap = {
  row: 'is-flex-direction-row',
  'row-reverse': 'is-flex-direction-row-reverse',
  column: 'is-flex-direction-column',
  'column-reverse': 'is-flex-direction-column-reverse',
};

const flexWraps = ['nowrap', 'wrap', 'wrap-reverse'];
const flexWrapMap = {
  nowrap: 'is-flex-wrap-nowrap',
  wrap: 'is-flex-wrap-wrap',
  'wrap-reverse': 'is-flex-wrap-wrap-reverse',
};

const justifyContents = [
  'flex-start', 'flex-end', 'center',
  'space-between', 'space-around', 'space-evenly',
  'start', 'end', 'left', 'right',
];
const justifyContentMap = {
  'flex-start': 'is-justify-content-flex-start',
  'flex-end': 'is-justify-content-flex-end',
  center: 'is-justify-content-center',
  'space-between': 'is-justify-content-space-between',
  'space-around': 'is-justify-content-space-around',
  'space-evenly': 'is-justify-content-space-evenly',
  start: 'is-justify-content-start',
  end: 'is-justify-content-end',
  left: 'is-justify-content-left',
  right: 'is-justify-content-right',
};

const alignContents = [
  'flex-start', 'flex-end', 'center',
  'space-between', 'space-around', 'space-evenly',
  'stretch', 'start', 'end', 'baseline',
];
const alignContentMap = {
  'flex-start': 'is-align-content-flex-start',
  'flex-end': 'is-align-content-flex-end',
  center: 'is-align-content-center',
  'space-between': 'is-align-content-space-between',
  'space-around': 'is-align-content-space-around',
  'space-evenly': 'is-align-content-space-evenly',
  stretch: 'is-align-content-stretch',
  start: 'is-align-content-start',
  end: 'is-align-content-end',
  baseline: 'is-align-content-baseline',
};

const alignItemses = [
  'stretch', 'flex-start', 'flex-end', 'center', 'baseline',
  'start', 'end', 'self-start', 'self-end',
];
const alignItemsMap = {
  stretch: 'is-align-items-stretch',
  'flex-start': 'is-align-items-flex-start',
  'flex-end': 'is-align-items-flex-end',
  center: 'is-align-items-center',
  baseline: 'is-align-items-baseline',
  start: 'is-align-items-start',
  end: 'is-align-items-end',
  'self-start': 'is-align-items-self-start',
  'self-end': 'is-align-items-self-end',
};

const alignSelfs = [
  'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch',
];
const alignSelfMap = {
  auto: 'is-align-self-auto',
  'flex-start': 'is-align-self-flex-start',
  'flex-end': 'is-align-self-flex-end',
  center: 'is-align-self-center',
  baseline: 'is-align-self-baseline',
  stretch: 'is-align-self-stretch',
};

const flexSizes = ['0', '1', '2', '3', '4', '5'];
const flexGrowMap = {};
const flexShrinkMap = {};

flexSizes.forEach(size => {
  flexGrowMap[size] = `is-flex-grow-${size}`;
  flexShrinkMap[size] = `is-flex-shrink-${size}`;
});

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
  flexDirection,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  flexGrow,
  flexShrink,
  float,
  clearfix,
  overlay,
  clipped,
  radiusless,
  shadowless,
  unselectable,
  clickable,
  relative,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
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
  const isFlexDirection = flexDirection && flexDirectionMap[flexDirection];
  const isFlexWrap = flexWrap && flexWrapMap[flexWrap];
  const isJustifyContent = justifyContent && justifyContentMap[justifyContent];
  const isAlignContent = alignContent && alignContentMap[alignContent];
  const isAlignItems = alignItems && alignItemsMap[alignItems];
  const isAlignSelf = alignSelf && alignSelfMap[alignSelf];
  const isFlexGrow = flexGrow && flexGrowMap[flexGrow];
  const isFlexShrink = flexShrink && flexShrinkMap[flexShrink];

  const classes = classNames(
    className,
    isTextAlign,
    isTextTransform,
    hasTextWeight,
    isFont,
    isDisplay,
    isFlexDirection,
    isFlexWrap,
    isJustifyContent,
    isAlignContent,
    isAlignItems,
    isAlignSelf,
    isFlexGrow,
    isFlexShrink,
    {
      [`has-background-${backgroundColor}`]: !!backgroundColor,
      [`has-text-${textColor}`]: !!textColor,

      // Margin and Padding
      [`m-${margin}`]: !!margin,
      [`mt-${marginTop}`]: !!marginTop,
      [`mr-${marginRight}`]: !!marginRight,
      [`mb-${marginBottom}`]: !!marginBottom,
      [`ml-${marginLeft}`]: !!marginLeft,
      [`mx-${marginHorizontal}`]: !!marginHorizontal,
      [`my-${marginVertical}`]: !!marginVertical,
      [`p-${padding}`]: !!padding,
      [`pt-${paddingTop}`]: !!paddingTop,
      [`pr-${paddingRight}`]: !!paddingRight,
      [`pb-${paddingBottom}`]: !!paddingBottom,
      [`pl-${paddingLeft}`]: !!paddingLeft,
      [`px-${paddingHorizontal}`]: !!paddingHorizontal,
      [`py-${paddingVertical}`]: !!paddingVertical,

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
      'is-pulled-left': float === 'left',
      'is-pulled-right': float === 'right',
      'is-clearfix': clearfix,
      'is-overlay': overlay,
      'is-clipped': clipped,
      'is-radiusless': radiusless,
      'is-shadowless': shadowless,
      'is-unselectable': unselectable,
      'is-clickable': clickable,
      'is-relative': relative,
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
  flexDirection: PropTypes.oneOf(flexDirections),
  flexWrap: PropTypes.oneOf(flexWraps),
  justifyContent: PropTypes.oneOf(justifyContents),
  alignContent: PropTypes.oneOf(alignContents),
  alignItems: PropTypes.oneOf(alignItemses),
  alignSelf: PropTypes.oneOf(alignSelfs),
  flexGrow: PropTypes.oneOf(flexSizes),
  flexShrink: PropTypes.oneOf(flexSizes),
  float: PropTypes.oneOf(['left', 'right']),
  clearfix: PropTypes.bool,
  overlay: PropTypes.bool,
  clipped: PropTypes.bool,
  radiusless: PropTypes.bool,
  shadowless: PropTypes.bool,
  unselectable: PropTypes.bool,
  clickable: PropTypes.bool,
  relative: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  marginTop: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  marginRight: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  marginLeft: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  marginHorizontal: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  marginVertical: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingTop: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingRight: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingLeft: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingHorizontal: PropTypes.oneOfType([
    PropTypes.oneOf(spacings),
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingVertical: PropTypes.oneOfType([
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
  flexDirection: undefined,
  flexWrap: undefined,
  justifyContent: undefined,
  alignContent: undefined,
  alignItems: undefined,
  alignSelf: undefined,
  flexGrow: undefined,
  flexShrink: undefined,
  float: undefined,
  clearfix: false,
  overlay: false,
  clipped: false,
  radiusless: false,
  shadowless: false,
  unselectable: false,
  clickable: false,
  relative: false,
  margin: undefined,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginHorizontal: undefined,
  marginVertical: undefined,
  padding: undefined,
  paddingTop: undefined,
  paddingRight: undefined,
  paddingBottom: undefined,
  paddingLeft: undefined,
  paddingHorizontal: undefined,
  paddingVertical: undefined,
  mobile: {},
  touch: {},
  tablet: {},
  desktop: {},
  widescreen: {},
  fullhd: {},
};
