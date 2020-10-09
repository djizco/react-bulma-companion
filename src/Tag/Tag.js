import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Tag({
  children,
  className,
  color,
  light,
  link,
  rounded,
  size,
  ...props
}) {
  const Element = link ? 'a' : 'span';

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
  ]),
  light: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'medium', 'large']),
  rounded: PropTypes.bool,
  delete: PropTypes.bool,
};

Tag.defaultProps = {
  className: undefined,
  children: null,
  link: false,
  color: undefined,
  light: false,
  size: undefined,
  rounded: false,
  delete: false,
};
