import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark', 'text',
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

export default function Block({
  children,
  className,
  color,
  ...props
}) {
  const isColor = color && colorMap[color];

  const classes = classNames('help', className, isColor);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(colors),
};

Block.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
  color: undefined,
};
