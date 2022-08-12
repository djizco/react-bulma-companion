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
const spaceValues = ['0', '1', '2', '3', '4', '5', '6'];

// Text Align
const textAlignMap = {
  center: 'has-text-centered',
  justify: 'has-text-justifyed',
  left: 'has-text-left',
  right: 'has-text-right',
};

export default function Element({
  children,
  className,
  component,
  domRef,
  textColor,
  backgroundColor,
  textAlign,
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}) {
  const Element = component;

  const isTextAlign = textAlign && textAlignMap[textAlign];

  const classes = classNames(className, isTextAlign, {
    [`has-text-${textColor}`]: !!textColor,
    [`has-background-${backgroundColor}`]: !!backgroundColor,
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
  });

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
  textColor: PropTypes.oneOfType([
    PropTypes.oneOf(colors),
    PropTypes.string,
  ]),
  backgroundColor: PropTypes.oneOfType([
    PropTypes.oneOf(colors),
    PropTypes.string,
  ]),
  m: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  mt: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  mr: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  ml: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  my: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  p: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  pt: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  pr: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  pb: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  pl: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  px: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  py: PropTypes.oneOfType([
    PropTypes.oneOf(spaceValues),
    PropTypes.string,
    PropTypes.number,
  ]),
  textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
};

Element.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  domRef: undefined,
  textColor: undefined,
  backgroundColor: undefined,
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
  textAlign: undefined,
};
