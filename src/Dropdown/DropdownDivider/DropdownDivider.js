import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownDivider({
  className,
  ...props
}) {
  const dropdownDividerClasses = classNames('dropdown-divider', className);

  return (
    <hr className={dropdownDividerClasses} {...props} />
  );
}

DropdownDivider.propTypes = {
  className: PropTypes.string,
};

DropdownDivider.defaultProps = {
  className: undefined,
};
