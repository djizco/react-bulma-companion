import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarStart({
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-start', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

NavbarStart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarStart.defaultProps = {
  className: undefined,
  children: null,
};
