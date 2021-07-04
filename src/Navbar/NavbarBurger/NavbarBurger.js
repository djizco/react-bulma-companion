import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarBurger({
  active,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('navbar-burger', className, {
    'is-active': active,
  });

  return (
    <Element role="button" className={classes} {...props}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </Element>
  );
}

NavbarBurger.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  active: PropTypes.bool,
};

NavbarBurger.defaultProps = {
  className: undefined,
  component: 'a',
  active: false,
};
