/* eslint react/button-has-type: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark', 'text', 'ghost',
];
const colorMap = {};
colors.forEach(color => {
  colorMap[color] = `is-${color}`;
});

const sizes = ['small', 'normal', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Button({
  active,
  children,
  className,
  color,
  focused,
  fullwidth,
  hovered,
  inverted,
  light,
  loading,
  outlined,
  responsive,
  rounded,
  selected,
  size,
  ...props
}) {
  const isColor = color && colorMap[color];
  const isSize = size && sizeMap[size];

  const classes = classNames('button', className, isColor, isSize, {
    'is-light': light,
    'is-responsive': responsive,
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
  color: PropTypes.oneOf(colors),
  light: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  responsive: PropTypes.bool,
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
  color: undefined,
  light: false,
  size: undefined,
  responsive: false,
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
