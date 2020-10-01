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
  const isSize = size && sizeMap[size];

  // Align
  const alignMap = {
    left: 'is-left',
    center: 'is-centered',
    right: 'is-right',
  };
  const isAlign = align && alignMap[align];

  const ButtonsClasses = classNames('buttons', className, isSize, isAlign, {
    'has-addons': addons,
  });

  return (
    <div className={ButtonsClasses} {...props}>
      {children}
    </div>
  );
}

Buttons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  addons: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Buttons.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
  addons: false,
  align: undefined,
};