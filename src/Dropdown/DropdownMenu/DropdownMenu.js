import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function DropdownMenu({
  children,
  className,
  ...props
}) {
  const classes = classNames('dropdown-menu', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

DropdownMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

DropdownMenu.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
