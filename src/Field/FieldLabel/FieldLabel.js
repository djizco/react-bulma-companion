import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

const sizes = ['small', 'normal', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

export default function FieldLabel({
  children,
  className,
  size,
  ...props
}) {
  const isSize = size && sizeMap[size];

  const classes = classNames('field-label', className, isSize);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

FieldLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
};

FieldLabel.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
};
