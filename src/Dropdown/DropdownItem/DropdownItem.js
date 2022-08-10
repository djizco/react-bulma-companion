import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownItem({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('dropdown-item', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

DropdownItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

DropdownItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
