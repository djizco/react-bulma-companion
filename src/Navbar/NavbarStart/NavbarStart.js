import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarStart({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('navbar-start', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

NavbarStart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

NavbarStart.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
