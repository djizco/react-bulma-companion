import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarDropdown({
  boxed,
  children,
  className,
  component,
  right,
  ...props
}) {
  const Element = component;

  const classes = classNames('navbar-dropdown', className, {
    'is-right': right,
    'is-boxed': boxed,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

NavbarDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  right: PropTypes.bool,
  boxed: PropTypes.bool,
};

NavbarDropdown.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  right: undefined,
  boxed: false,
};
