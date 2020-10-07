import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Input({
  active,
  className,
  color,
  focused,
  fullWidth,
  hovered,
  inline,
  rounded,
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

  const inputClasses = classNames('input', className, isColor, isSize, {
    'is-inline': inline,
    'is-fullwidth': fullWidth,
    'is-active': active,
    'is-rounded': rounded,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-static': props.static,
  });

  // eslint-disable-next-line
  delete props.static;

  return (
    <input className={inputClasses} {...props} />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
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
  inline: PropTypes.bool,
  fullWidth: PropTypes.bool,
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
  type: undefined,
  value: undefined,
  onChange: undefined,
  placeholder: undefined,
  color: undefined,
  size: undefined,
  inline: false,
  fullWidth: false,
  active: false,
  rounded: false,
  hovered: false,
  focused: false,
  disabled: false,
  readOnly: false,
  static: false,
};
