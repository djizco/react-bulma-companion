import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function NavbarMenu({
  active,
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-menu', className, {
    'is-active': active,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

NavbarMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  active: PropTypes.bool,
};

NavbarMenu.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  active: false,
};
