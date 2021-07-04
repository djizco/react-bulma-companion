import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MenuList({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('menu-list', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MenuList.defaultProps = {
  className: undefined,
  children: null,
  component: 'ul',
};
