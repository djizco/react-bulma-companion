import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Notification({
  children,
  className,
  color,
  component,
  light,
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

  const classes = classNames('notification', className, isColor, {
    'is-light': light,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Notification.propTypes = {
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
  ]),
  light: PropTypes.bool,
};

Notification.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  color: undefined,
  light: false,
};
