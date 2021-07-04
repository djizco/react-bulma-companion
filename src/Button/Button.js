/* eslint react/button-has-type: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({
  active,
  children,
  className,
  color,
  component,
  focused,
  fullwidth,
  hovered,
  inverted,
  light,
  link,
  loading,
  outlined,
  rounded,
  selected,
  size,
  ...props
}) {
  if (process.env.NODE_ENV === 'development' && link) {
    // eslint-disable-next-line
    console.warn('Using the `link` prop is deprecated. Use `component="a"` instead.');
  }

  const Element = link ? 'a' : component;

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
    text: 'is-text',
    ghost: 'is-ghost',
  };
  const isColor = color && colorMap[color];

  // Sizes
  const sizeMap = {
    small: 'is-small',
    normal: 'is-normal',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const classes = classNames('button', className, isColor, isSize, {
    'is-light': light,
    'is-fullwidth': fullwidth,
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
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
    Deprecation Warning: Use `component="a"`.
  */
  link: PropTypes.bool,
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
    'text',
    'ghost',
  ]),
  light: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'normal',
    'medium',
    'large',
  ]),
  fullwidth: PropTypes.bool,
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
  className: undefined,
  children: null,
  component: 'button',
  type: 'button',
  link: false,
  color: undefined,
  light: false,
  size: undefined,
  fullwidth: false,
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
