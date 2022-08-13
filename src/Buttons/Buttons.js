import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'are-small',
  medium: 'are-medium',
  large: 'are-large',
};

const aligns = ['center', 'right'];
const alignMap = {
  center: 'is-centered',
  right: 'is-right',
};

export default function Buttons({
  addons,
  align,
  children,
  className,
  size,
  ...props
}) {
  const areSize = size && sizeMap[size];
  const isAlign = align && alignMap[align];

  const classes = classNames('buttons', className, areSize, isAlign, {
    'has-addons': addons,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Buttons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
  addons: PropTypes.bool,
  align: PropTypes.oneOf(aligns),
};

Buttons.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
  addons: false,
  align: undefined,
};
