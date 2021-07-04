import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MessageBody from './MessageBody';
import MessageHeader from './MessageHeader';

export default function Message({
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
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Message.Body = MessageBody;
Message.Header = MessageHeader;

Message.propTypes = {
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Message.defaultProps = {
  className: undefined,
  children: null,
  component: 'article',
  color: undefined,
  size: undefined,
};
