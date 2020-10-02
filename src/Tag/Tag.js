import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Tag({
  children,
  className,
  color,
  light,
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
    normal: 'is-normal',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const tagClasses = classNames('tag', className, isColor, isSize, {
    'is-light': light,
    'is-rounded': rounded,
    'is-delete': props.delete,
  });

  // eslint-disable-next-line
  delete props.delete;

  return (
    <span className={tagClasses} {...props}>
      {children}
    </span>
  );
}

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
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
  size: PropTypes.oneOf(['normal', 'medium', 'large']),
  rounded: PropTypes.bool,
  delete: PropTypes.bool,
};

Tag.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  light: false,
  size: undefined,
  rounded: false,
  delete: false,
};
