import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownContent({
  children,
  className,
  ...props
}) {
  const dropdownContentClasses = classNames('dropdown-content', className);

  return (
    <div className={dropdownContentClasses} {...props}>
      {children}
    </div>
  );
}

DropdownContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

DropdownContent.defaultProps = {
  className: undefined,
  children: null,
};
