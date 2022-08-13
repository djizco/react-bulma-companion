import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function NavbarBrand({
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-brand', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

NavbarBrand.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

NavbarBrand.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
