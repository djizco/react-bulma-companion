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
  ...props
}) {
  const Element = component;

  const isTextAlign = textAlign && textAlignMap[textAlign];

  const classes = classNames(className, isTextAlign, {
    [`has-text-${textColor}`]: !!textColor,
    [`has-background-${backgroundColor}`]: !!backgroundColor,
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
    PropTypes.oneOf([...colors]),
    PropTypes.string,
  ]),
  backgroundColor: PropTypes.oneOfType([
    PropTypes.oneOf([...colors]),
    PropTypes.string,
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
  textAlign: undefined,
};
