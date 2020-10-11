import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarBurger({
  active,
  className,
  ...props
}) {
  const classes = classNames('navbar-burger', className, {
    'is-active': active,
  });

  return (
    <a role="button" className={classes} {...props}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );
}

NavbarBurger.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};

NavbarBurger.defaultProps = {
  className: undefined,
  active: false,
};
