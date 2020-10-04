import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Control({
  children,
  className,
  expanded,
  iconsLeft,
  iconsRight,
  ...props
}) {
  const controlClasses = classNames('control', className, {
    'has-icons-left': iconsLeft,
    'has-icons-right': iconsRight,
    'is-expanded': expanded,
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
};

Control.defaultProps = {
  className: undefined,
  children: null,
  iconsLeft: false,
  iconsRight: false,
  expanded: false,
};
