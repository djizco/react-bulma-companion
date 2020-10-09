import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownTrigger({
  children,
  className,
  ...props
}) {
  const dropdownTriggerClasses = classNames('dropdown-trigger', className);

  return (
    <div className={dropdownTriggerClasses} {...props}>
      {children}
    </div>
  );
}

DropdownTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

DropdownTrigger.defaultProps = {
  className: undefined,
  children: null,
};
