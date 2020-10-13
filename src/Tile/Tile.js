import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Tile({
  box,
  children,
  className,
  color,
  light,
  type,
  vertical,
  width,
  ...props
}) {
  // Types
  const typeMap = {
    ancestor: 'is-ancestor',
    parent: 'is-parent',
    child: 'is-child',
  };
  const isType = type && typeMap[type];

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

  // Widths
  const widthMap = {
    1: 'is-1',
    2: 'is-2',
    3: 'is-3',
    4: 'is-4',
    5: 'is-5',
    6: 'is-6',
    7: 'is-7',
    8: 'is-8',
    9: 'is-9',
    10: 'is-10',
    11: 'is-11',
    12: 'is-12',
  };
  const isWidth = width && widthMap[width];

  const classes = classNames('tile', className, isType, isColor, isWidth, {
    notification: color,
    'is-light': light,
    'is-vertical': vertical,
    box,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Tile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf([
    'ancestor',
    'parent',
    'child',
  ]),
  width: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]),
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
  light: PropTypes.bool,
  vertical: PropTypes.bool,
  box: PropTypes.bool,
};

Tile.defaultProps = {
  className: undefined,
  children: null,
  type: undefined,
  width: undefined,
  color: undefined,
  light: false,
  vertical: false,
  box: false,
};
