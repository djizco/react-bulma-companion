import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  // Sizes
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const controlClasses = classNames('control', className, isSize, {
    'has-icons-left': iconsLeft,
    'has-icons-right': iconsRight,
    'is-expanded': expanded,
    'is-loading': loading,
  });

  return (
    <div className={controlClasses} {...props}>
      {children}
    </div>
  );
}

Control.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  iconsLeft: PropTypes.bool,
  iconsRight: PropTypes.bool,
  expanded: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Control.defaultProps = {
  className: undefined,
  children: null,
  iconsLeft: false,
  iconsRight: false,
  expanded: false,
  loading: false,
  size: undefined,
};
