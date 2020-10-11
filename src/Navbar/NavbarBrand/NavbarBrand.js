import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarBrand({
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-brand', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

NavbarBrand.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarBrand.defaultProps = {
  className: undefined,
  children: null,
};
