import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MessageBody from './MessageBody';
import MessageHeader from './MessageHeader';

import Element from '../Element';

const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark',
];
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

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Message({
  children,
  className,
  color,
  size,
  ...props
}) {
  const isColor = color && colorMap[color];
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
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
};

Message.defaultProps = {
  className: undefined,
  children: null,
  component: 'article',
  color: undefined,
  size: undefined,
};
