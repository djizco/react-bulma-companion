import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownDivider({
  className,
  ...props
}) {
  const classes = classNames('dropdown-divider', className);

  return (
    <hr className={classes} {...props} />
  );
}

DropdownDivider.propTypes = {
  className: PropTypes.string,
};

DropdownDivider.defaultProps = {
  className: undefined,
};
