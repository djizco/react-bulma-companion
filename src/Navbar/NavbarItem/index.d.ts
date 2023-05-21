import { ElementComponent } from '../../Element';

export interface NavbarItemProps {
  active?: boolean;
  hasDropdown?: boolean;
  hasDropup?: boolean;
  hoverable?: boolean;
  expanded?: boolean;
  tab?: boolean;
}

declare const NavbarItem: ElementComponent<NavbarItemProps, 'div'>;

export default NavbarItem;
