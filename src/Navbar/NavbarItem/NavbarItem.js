import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function NavbarItem({
  active,
  children,
  className,
  expanded,
  hasDropdown,
  hasDropup,
  hoverable,
  link,
  tab,
  ...props
}) {
  const Element = link ? 'a' : 'div';

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
  link: PropTypes.bool,
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
  link: false,
  active: false,
  hasDropdown: false,
  hasDropup: false,
  hoverable: false,
  expanded: false,
  tab: false,
};
