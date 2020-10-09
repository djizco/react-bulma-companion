import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MessageBody from './MessageBody';
import MessageHeader from './MessageHeader';

export default function Message({
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

  const classes = classNames('message', className, isColor, isSize);

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
}

Message.Body = MessageBody;
Message.Header = MessageHeader;

Message.propTypes = {
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
};

Message.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  size: undefined,
};
