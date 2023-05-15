import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

// Colors
const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark',
];
const colorMap = {};
colors.forEach(color => {
  colorMap[color] = `is-${color}`;
});

// Sizes
const sizeMap = {
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Tag({
  children,
  className,
  color,
  light,
  rounded,
  size,
  ...props
}) {
  const isColor = color && colorMap[color];
  const isSize = size && sizeMap[size];

  const classes = classNames('tag', className, isColor, isSize, {
    'is-light': light,
    'is-rounded': rounded,
    'is-delete': props.delete,
  });

  // eslint-disable-next-line
  delete props.delete;

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(colors),
  light: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'medium', 'large']),
  rounded: PropTypes.bool,
  delete: PropTypes.bool,
};

Tag.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
  color: undefined,
  light: false,
  size: undefined,
  rounded: false,
  delete: false,
};
