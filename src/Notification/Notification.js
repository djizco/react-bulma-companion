import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Notification({
  children,
  className,
  color,
  light,
  ...props
}) {
  // Colors
  const colorMap = {
    white: 'is-white',
    black: 'is-black',
    light: 'is-light',
    dark: 'is-dark',
    primary: 'is-primary',
    link: 'is-link',
    info: 'is-info',
    success: 'is-success',
    warning: 'is-warning',
    danger: 'is-danger',
  };
  const isColor = color && colorMap[color];

  const NotificationClasses = classNames('notification', className, isColor, {
    'is-light': light,
  });

  return (
    <div className={NotificationClasses} {...props}>
      {children}
    </div>
  );
}

Notification.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'white',
    'black',
    'light',
    'dark',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  light: PropTypes.bool,
};

Notification.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  light: false,
};
