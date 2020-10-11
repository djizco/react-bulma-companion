import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarEnd({
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-end', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

NavbarEnd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

NavbarEnd.defaultProps = {
  className: undefined,
  children: null,
};
