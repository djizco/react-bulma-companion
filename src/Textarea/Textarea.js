import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

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
  // Colors
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
  const isColor = color && colorMap[color];

  // Sizes
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
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
  color: PropTypes.oneOf([
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
    'white',
    'black',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
