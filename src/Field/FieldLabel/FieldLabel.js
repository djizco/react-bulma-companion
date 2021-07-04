import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FieldLabel({
  children,
  className,
  component,
  size,
  ...props
}) {
  const Element = component;

  // Sizes
  const sizeMap = {
    small: 'is-small',
    normal: 'is-normal',
    medium: 'is-medium',
    large: 'is-large',
  };
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
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
};
