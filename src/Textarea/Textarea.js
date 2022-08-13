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

export default function Textarea({
  active,
  className,
  color,
  fixed,
  focused,
  fullwidth,
  hovered,
  inline,
  size,
  ...props
}) {
  const isColor = color && colorMap[color];
  const isSize = size && sizeMap[size];

  const classes = classNames('textarea', className, isColor, isSize, {
    'has-fixed-size': fixed,
    'is-inline': inline,
    'is-fullwidth': fullwidth,
    'is-active': active,
    'is-hovered': hovered,
    'is-focused': focused,
  });

  return (
    <Element className={classes} {...props} />
  );
}

Textarea.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
  fixed: PropTypes.bool,
  inline: PropTypes.bool,
  fullwidth: PropTypes.bool,
  active: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

Textarea.defaultProps = {
  className: undefined,
  component: 'textarea',
  color: undefined,
  size: undefined,
  fixed: false,
  inline: false,
  fullwidth: false,
  active: false,
  hovered: false,
  focused: false,
  disabled: false,
  readOnly: false,
};
