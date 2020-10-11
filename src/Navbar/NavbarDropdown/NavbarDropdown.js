import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarDropdown({
  boxed,
  children,
  className,
  right,
  ...props
}) {
  const classes = classNames('navbar-dropdown', className, {
    'is-right': right,
    'is-boxed': boxed,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

NavbarDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  boxed: PropTypes.bool,
};

NavbarDropdown.defaultProps = {
  className: undefined,
  children: null,
  right: undefined,
  boxed: false,
};
