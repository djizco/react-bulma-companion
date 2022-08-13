import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function NavbarEnd({
  children,
  className,
  ...props
}) {
  const classes = classNames('navbar-end', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

NavbarEnd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

NavbarEnd.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
