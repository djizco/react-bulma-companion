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

const textColorMap = {};
const backgroundColorMap = {};

colors.forEach(color => {
  textColorMap[color] = `has-text-${color}`;
  backgroundColorMap[color] = `has-background-${color}`;
});

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

  const hasTextColor = textColor && textColorMap[textColor];
  const hasBackgroundColor = backgroundColor && backgroundColorMap[backgroundColor];
  const isTextAlign = textAlign && textAlignMap[textAlign];

  const classes = classNames(className, hasTextColor, hasBackgroundColor, isTextAlign);

  return (
    <Element ref={domRef} className={classes} {...props}>
      {children}
    </Element>
  );
}

Element.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType.isRequired,
  domRef: PropTypes.object, // Verify (ElementType?)
  textColor: PropTypes.oneOf([...colors]),
  backgroundColor: PropTypes.oneOf([...colors]),
  textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
};

Element.defaultProps = {
  className: undefined,
  children: null,
  domRef: undefined,
  textColor: undefined,
  backgroundColor: undefined,
  textAlign: undefined,
};
