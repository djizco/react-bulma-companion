import { ElementComponent } from '../../Element';

export interface NavbarMenuProps {
  active?: boolean;
}

declare const NavbarMenu: ElementComponent<NavbarMenuProps, 'div'>;

export default NavbarMenu;
