import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarDivider({
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('navbar-divider', className);

  return (
    <Element className={classes} {...props} />
  );
}

NavbarDivider.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
};

NavbarDivider.defaultProps = {
  className: undefined,
  component: 'hr',
};
