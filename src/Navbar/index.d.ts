import { ElementComponent } from '../Element';
import { MainColor } from '../types';

import NavbarBrand from './NavbarBrand';
import NavbarBurger from './NavbarBurger';
import NavbarDivider from './NavbarDivider';
import NavbarDropdown from './NavbarDropdown';
import NavbarEnd from './NavbarEnd';
import NavbarItem from './NavbarItem';
import NavbarLink from './NavbarLink';
import NavbarMenu from './NavbarMenu';
import NavbarStart from './NavbarStart';

export type NavbarFixed = 'top' | 'bottom' | 'top-desktop' | 'bottom-desktop' | 'top-touch' | 'bottom-touch';

export type NavbarColor = MainColor;

export interface NavbarProps {
  color?: NavbarColor;
  fixed?: NavbarFixed;
  shadow?: boolean;
  transparent?: boolean;
  spaced?: boolean;
}

declare const Navbar: ElementComponent<NavbarProps, 'nav'> & {
  Brand: typeof NavbarBrand;
  Burger: typeof NavbarBurger;
  Divider: typeof NavbarDivider;
  Dropdown: typeof NavbarDropdown;
  End: typeof NavbarEnd;
  Item: typeof NavbarItem;
  Link: typeof NavbarLink;
  Menu: typeof NavbarMenu;
  Start: typeof NavbarStart;
};

export default Navbar;
