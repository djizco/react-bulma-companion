import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Buttons({
  addons,
  align,
  children,
  className,
  component,
  size,
  ...props
}) {
  const Element = component;

  // Size
  const sizeMap = {
    small: 'are-small',
    medium: 'are-medium',
    large: 'are-large',
  };
  const areSize = size && sizeMap[size];

  // Align
  const alignMap = {
    center: 'is-centered',
    right: 'is-right',
  };
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  addons: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'right']),
};

Buttons.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
  addons: false,
  align: undefined,
};
