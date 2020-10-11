import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarLink({
  arrowless,
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-link', className, {
    'is-arrowless': arrowless,
  });

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

NavbarLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  arrowless: PropTypes.bool,
};

NavbarLink.defaultProps = {
  className: undefined,
  children: null,
  arrowless: false,
};
