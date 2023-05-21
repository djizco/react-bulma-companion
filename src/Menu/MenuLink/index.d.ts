import { ElementComponent } from '../../Element';

export interface MenuLinkProps {
  active?: boolean;
}

declare const MenuLink: ElementComponent<MenuLinkProps, 'a'>;

export default MenuLink;
