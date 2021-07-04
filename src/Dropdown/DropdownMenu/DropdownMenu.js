import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownMenu({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

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
