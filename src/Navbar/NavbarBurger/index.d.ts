import { ElementWithoutChildrenComponent } from '../../Element';

export interface NavbarBurgerProps {
  active?: boolean;
}

declare const NavbarBurger: ElementWithoutChildrenComponent<NavbarBurgerProps, 'a'>;

export default NavbarBurger;
