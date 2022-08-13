import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark',
];
const colorMap = {
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  white: 'is-white',
  black: 'is-black',
  light: 'is-light',
  dark: 'is-dark',
};

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Input({
  active,
  className,
  color,
  focused,
  fullwidth,
  hovered,
  inline,
  rounded,
  size,
  ...props
}) {
  const isColor = color && colorMap[color];
  const isSize = size && sizeMap[size];

  const classes = classNames('input', className, isColor, isSize, {
    'is-inline': inline,
    'is-fullwidth': fullwidth,
    'is-active': active,
    'is-rounded': rounded,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-static': props.static,
  });

  // eslint-disable-next-line
  delete props.static;

  return (
    <Element className={classes} {...props} />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
  inline: PropTypes.bool,
  fullwidth: PropTypes.bool,
  active: PropTypes.bool,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  static: PropTypes.bool,
};

Input.defaultProps = {
  className: undefined,
  component: 'input',
  type: undefined,
  color: undefined,
  size: undefined,
  inline: false,
  fullwidth: false,
  active: false,
  rounded: false,
  hovered: false,
  focused: false,
  disabled: false,
  readOnly: false,
  static: false,
};
