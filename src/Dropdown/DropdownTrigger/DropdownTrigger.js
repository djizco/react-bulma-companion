import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownTrigger({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('dropdown-trigger', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

DropdownTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

DropdownTrigger.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
