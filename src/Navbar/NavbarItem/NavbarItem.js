import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarItem({
  active,
  children,
  className,
  component,
  expanded,
  hasDropdown,
  hasDropup,
  hoverable,
  tab,
  ...props
}) {
  const Element = component;

  const classes = classNames('navbar-item', className, {
    'is-active': active,
    'has-dropdown': hasDropdown || hasDropup,
    'has-dropdown-up': hasDropup,
    'is-hoverable': hoverable,
    'is-expanded': expanded,
    'is-tab': tab,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

NavbarItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  active: PropTypes.bool,
  hasDropdown: PropTypes.bool,
  hasDropup: PropTypes.bool,
  hoverable: PropTypes.bool,
  expanded: PropTypes.bool,
  tab: PropTypes.bool,
};

NavbarItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  active: false,
  hasDropdown: false,
  hasDropup: false,
  hoverable: false,
  expanded: false,
  tab: false,
};
