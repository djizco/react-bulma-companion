import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconText from './IconText';

import Element from '../Element';

const colors = [
  'white', 'black', 'light', 'dark',
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'black-bis', 'black-ter',
  'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter',
  'white-ter', 'white-bis',
  'primary-light', 'link-light', 'info-light', 'success-light', 'warning-light', 'danger-light',
  'primary-dark', 'link-dark', 'info-dark', 'success-dark', 'warning-dark', 'danger-dark',
];

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
};

const aligns = ['left', 'right'];
const alignMap = {
  left: 'is-left',
  right: 'is-right',
};

export default function Icon({
  align,
  children,
  className,
  color,
  size,
  ...props
}) {
  const isSize = size && sizeMap[size];
  const isAlign = align && alignMap[align];

  const classes = classNames('icon', className, isSize, isAlign);

  return (
    <Element className={classes} {...props} textColor={color}>
      {children}
    </Element>
  );
}

Icon.Text = IconText;

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(colors),
    PropTypes.string,
  ]),
  size: PropTypes.oneOf(sizes),
  align: PropTypes.oneOf(aligns),
};

Icon.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
  color: undefined,
  size: undefined,
  align: undefined,
};
