import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarMenu({
  active,
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-menu', className, {
    'is-active': active,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

NavbarMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

NavbarMenu.defaultProps = {
  className: undefined,
  children: null,
  active: false,
};
