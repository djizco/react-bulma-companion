import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SelectContent from './SelectContent';
import SelectOption from './SelectOption';

export default function Select({
  children,
  className,
  color,
  fullwidth,
  loading,
  rounded,
  size,
  multiple,
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

  const classes = classNames('select', className, isColor, isSize, {
    'is-fullwidth': fullwidth,
    'is-multiple': multiple,
    'is-rounded': rounded,
    'is-loading': loading,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Select.Content = SelectContent;
Select.Option = SelectOption;

Select.propTypes = {
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
  fullwidth: PropTypes.bool,
  multiple: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
};

Select.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  size: undefined,
  fullwidth: false,
  multiple: false,
  rounded: false,
  loading: false,
};
