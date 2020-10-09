import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownMenu({
  children,
  className,
  ...props
}) {
  const classes = classNames('dropdown-menu', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

DropdownMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

DropdownMenu.defaultProps = {
  className: undefined,
  children: null,
};
