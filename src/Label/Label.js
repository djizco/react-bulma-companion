import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Label({
  children,
  className,
  component,
  size,
  ...props
}) {
  const Element = component;

  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const classes = classNames('label', className, isSize);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  className: undefined,
  children: null,
  component: 'label',
  size: undefined,
};
