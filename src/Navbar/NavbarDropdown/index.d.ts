import { ElementComponent } from '../../Element';

export interface NavbarDropdownProps {
  right?: boolean;
  boxed?: boolean;
}

declare const NavbarDropdown: ElementComponent<NavbarDropdownProps, 'div'>;

export default NavbarDropdown;
