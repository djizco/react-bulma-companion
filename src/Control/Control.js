import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Control({
  children,
  className,
  expanded,
  iconsLeft,
  iconsRight,
  loading,
  size,
  ...props
}) {
  const isSize = size && sizeMap[size];

  const classes = classNames('control', className, isSize, {
    'has-icons-left': iconsLeft,
    'has-icons-right': iconsRight,
    'is-expanded': expanded,
    'is-loading': loading,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Control.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  iconsLeft: PropTypes.bool,
  iconsRight: PropTypes.bool,
  expanded: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
};

Control.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  iconsLeft: false,
  iconsRight: false,
  expanded: false,
  loading: false,
  size: undefined,
};
