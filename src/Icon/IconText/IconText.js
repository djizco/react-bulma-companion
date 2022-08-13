import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function IconText({
  children,
  className,
  color,
  ...props
}) {
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

  const classes = classNames('icon-text', className, isColor);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

IconText.propTypes = {
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
};

IconText.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  component: 'span',
};
