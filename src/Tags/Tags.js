import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const sizes = ['medium', 'large'];
const sizeMap = {
  medium: 'are-medium',
  large: 'are-large',
};

const aligns = ['center', 'right'];
const alignMap = {
  center: 'is-centered',
  right: 'is-right',
};

export default function Tags({
  addons,
  align,
  children,
  className,
  size,
  ...props
}) {
  const areSize = size && sizeMap[size];
  const isAlign = align && alignMap[align];

  const classes = classNames('tags', className, areSize, isAlign, {
    'has-addons': addons,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Tags.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
  addons: PropTypes.bool,
  align: PropTypes.oneOf(aligns),
};

Tags.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
  addons: false,
  align: undefined,
};
