import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconText from './IconText';

export default function Icon({
  align,
  children,
  className,
  color,
  component,
  size,
  ...props
}) {
  const Element = component;

  // Colors
  const colorMap = {
    primary: 'has-text-primary',
    link: 'has-text-link',
    info: 'has-text-info',
    success: 'has-text-success',
    warning: 'has-text-warning',
    danger: 'has-text-danger',
    white: 'has-text-white',
    black: 'has-text-black',
    light: 'has-text-light',
    dark: 'has-text-dark',
    'black-bis': 'has-text-black-bis',
    'black-ter': 'has-text-black-ter',
    'grey-dark': 'has-text-grey-dark',
    grey: 'has-text-grey',
    'grey-light': 'has-text-grey-light',
    'grey-lighter': 'has-text-grey-lighter',
    'white-ter': 'has-text-white-ter',
    'white-bis': 'has-text-white-bis',
    'primary-light': 'has-text-primary-light',
    'link-light': 'has-text-link-light',
    'info-light': 'has-text-info-light',
    'success-light': 'has-text-success-light',
    'warning-light': 'has-text-warning-light',
    'danger-light': 'has-text-danger-light',
    'primary-dark': 'has-text-primary-dark',
    'link-dark': 'has-text-link-dark',
    'info-dark': 'has-text-info-dark',
    'success-dark': 'has-text-success-dark',
    'warning-dark': 'has-text-warning-dark',
    'danger-dark': 'has-text-danger-dark',
  };
  const isColor = color && colorMap[color];

  // Sizes
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  // Align
  const alignMap = {
    left: 'is-left',
    right: 'is-right',
  };
  const isAlign = align && alignMap[align];

  const classes = classNames('icon', className, isColor, isSize, isAlign);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Icon.Text = IconText;

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
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
    'black-bis',
    'black-ter',
    'grey-dark',
    'grey',
    'grey-light',
    'grey-lighter',
    'white-ter',
    'white-bis',
    'primary-light',
    'link-light',
    'info-light',
    'success-light',
    'warning-light',
    'danger-light',
    'primary-dark',
    'link-dark',
    'info-dark',
    'success-dark',
    'warning-dark',
    'danger-dark',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['left', 'right']),
};

Icon.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
  color: undefined,
  size: undefined,
  align: undefined,
};
