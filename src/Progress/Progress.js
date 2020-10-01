import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Progress({
  children,
  className,
  color,
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

  const progressClasses = classNames('progress', className, isColor, isSize);

  return (
    <progress className={progressClasses} {...props}>
      {children}
    </progress>
  );
}

Progress.propTypes = {
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Progress.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  size: undefined,
  value: undefined,
  max: undefined,
};
