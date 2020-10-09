import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Buttons({
  addons,
  align,
  children,
  className,
  size,
  ...props
}) {
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
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Buttons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  addons: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'right']),
};

Buttons.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
  addons: false,
  align: undefined,
};
