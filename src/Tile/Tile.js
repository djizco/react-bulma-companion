import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const types = ['ancestor', 'parent', 'child'];
const typeMap = {
  ancestor: 'is-ancestor',
  parent: 'is-parent',
  child: 'is-child',
};

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

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const sizeMap = {};
sizes.forEach(size => {
  sizeMap[size] = `is-${size}`;
});

export default function Tile({
  box,
  children,
  className,
  color,
  light,
  type,
  vertical,
  size,
  ...props
}) {
  const isType = type && typeMap[type];
  const isColor = color && colorMap[color];
  const isSize = size && sizeMap[size];

  const classes = classNames('tile', className, isType, isColor, isSize, {
    notification: color,
    'is-light': light,
    'is-vertical': vertical,
    box,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Tile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  light: PropTypes.bool,
  vertical: PropTypes.bool,
  box: PropTypes.bool,
};

Tile.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  type: undefined,
  size: undefined,
  color: undefined,
  light: false,
  vertical: false,
  box: false,
};
