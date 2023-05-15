import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../Element';

import { NavbarBrandProps } from './NavbarBrand';
import { NavbarBurgerProps } from './NavbarBurger';
import { NavbarDividerProps } from './NavbarDivider';
import { NavbarDropdownProps } from './NavbarDropdown';
import { NavbarEndProps } from './NavbarEnd';
import { NavbarItemProps } from './NavbarItem';
import { NavbarLinkProps } from './NavbarLink';
import { NavbarMenuProps } from './NavbarMenu';
import { NavbarStartProps } from './NavbarStart';

export interface NavbarProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  color: MainColor
  fixed: 'top' | 'bottom' | 'top-desktop' | 'bottom-desktop' | 'top-touch' | 'bottom-touch';
  shadow?: boolean;
  transparent?: boolean;
  spaced?: boolean;
}

declare function Navbar(props: NavbarProps): ReactElement;

declare namespace Navbar {
  export function Brand(props: NavbarBrandProps): ReactElement;
  export function Burger(props: NavbarBurgerProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function Divider(props: NavbarDividerProps): ReactElement;
  export function Dropdown(props: NavbarDropdownProps): ReactElement;
  export function End(props: NavbarEndProps): ReactElement;
  export function Item(props: NavbarItemProps): ReactElement;
  export function Link(props: NavbarLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function Menu(props: NavbarMenuProps): ReactElement;
  export function Start(props: NavbarStartProps): ReactElement;
}

export default Navbar;
