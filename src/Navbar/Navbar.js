import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NavbarBrand from './NavbarBrand';
import NavbarBurger from './NavbarBurger';
import NavbarDivider from './NavbarDivider';
import NavbarDropdown from './NavbarDropdown';
import NavbarEnd from './NavbarEnd';
import NavbarItem from './NavbarItem';
import NavbarLink from './NavbarLink';
import NavbarMenu from './NavbarMenu';
import NavbarStart from './NavbarStart';

import Element from '../Element';

const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark',
];
const colorMap = {
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  white: 'is-white',
  black: 'is-black',
  light: 'is-light',
  dark: 'is-dark',
};

const fixedDirections = ['top', 'bottom', 'top-desktop', 'bottom-desktop', 'top-touch', 'bottom-touch'];
const fixedMap = {};
fixedDirections.forEach(direction => {
  fixedMap[direction] = `is-fixed-${direction}`;
});

export default function Navbar({
  children,
  className,
  color,
  fixed,
  shadow,
  spaced,
  transparent,
  ...props
}) {
  const isColor = color && colorMap[color];
  const isFixed = fixed && fixedMap[fixed];

  const classes = classNames('navbar', className, isColor, isFixed, {
    'is-transparent': transparent,
    'is-spaced': spaced,
    'has-shadow': shadow,
  });

  return (
    <Element role="navigation" className={classes} {...props}>
      {children}
    </Element>
  );
}

Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Divider = NavbarDivider;
Navbar.Dropdown = NavbarDropdown;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.Link = NavbarLink;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(colors),
  fixed: PropTypes.oneOf(fixedDirections),
  shadow: PropTypes.bool,
  transparent: PropTypes.bool,
  spaced: PropTypes.bool,
};

Navbar.defaultProps = {
  className: undefined,
  children: null,
  component: 'nav',
  color: undefined,
  fixed: undefined,
  shadow: false,
  transparent: false,
  spaced: false,
};
