import { ElementComponent } from '../../Element';

export interface NavbarLinkProps {
  arrowless?: boolean;
}

declare const NavbarLink: ElementComponent<NavbarLinkProps, 'a'>;

export default NavbarLink;
