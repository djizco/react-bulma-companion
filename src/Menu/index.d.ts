import { ElementComponent } from '../Element';

import MenuLabel from './MenuLabel';
import MenuLink from './MenuLink';
import MenuList from './MenuList';
import MenuListItem from './MenuListItem';

export type MenuSize = 'small' | 'medium' | 'large';

export interface MenuProps {
  size?: MenuSize;
}

declare const Menu: ElementComponent<MenuProps, 'aside'> & {
  Label: typeof MenuLabel;
  Link: typeof MenuLink;
  List: typeof MenuList;
  ListItem: typeof MenuListItem;
};

export default Menu;
