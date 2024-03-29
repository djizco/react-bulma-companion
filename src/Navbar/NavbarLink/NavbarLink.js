import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

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
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

NavbarLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  arrowless: PropTypes.bool,
};

NavbarLink.defaultProps = {
  className: undefined,
  children: null,
  component: 'a',
  arrowless: false,
};
