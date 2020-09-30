/* eslint react/button-has-type: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({
  active,
  children,
  className,
  color,
  disabled,
  focused,
  fullWidth,
  hovered,
  inverted,
  light,
  loading,
  onClick,
  outlined,
  rounded,
  selected,
  size,
  ...props
}) {
  // Colors
  const colorMap = {
    white: 'is-white',
    light: 'is-light',
    dark: 'is-dark',
    black: 'is-black',
    text: 'is-text',
    primary: 'is-primary',
    link: 'is-link',
    info: 'is-info',
    success: 'is-success',
    warning: 'is-warning',
    danger: 'is-danger',
  };
  const isColor = colorMap[color] || 'is-primary';

  // Sizes
  const sizeMap = {
    small: 'is-small',
    normal: 'is-normal',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const buttonClasses = classNames('button', className, isColor, isSize, {
    'is-light': light,
    'is-fullwidth': fullWidth,
    'is-outlined': outlined,
    'is-inverted': inverted,
    'is-rounded': rounded,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'is-selected': selected,
    'is-loading': loading,
    'is-static': props.static,
  });

  // eslint-disable-next-line
  delete props.static;

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    'white',
    'light',
    'dark',
    'black',
    'text',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  light: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  selected: PropTypes.bool,
  loading: PropTypes.bool,
  static: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  className: undefined,
  onClick: () => {},
  color: 'primary',
  light: false,
  size: undefined,
  fullWidth: false,
  outlined: false,
  inverted: false,
  rounded: false,
  hovered: false,
  focused: false,
  active: false,
  selected: false,
  loading: false,
  static: false,
  disabled: false,
};
