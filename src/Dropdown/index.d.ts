import { ElementComponent } from '../Element';

import DropdownContent from './DropdownContent';
import DropdownDivider from './DropdownDivider';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';

export interface DropdownProps {
  active?: boolean;
  hoverable?: boolean;
  right?: boolean;
  up?: boolean;
}

declare const Dropdown: ElementComponent<DropdownProps, 'div'> & {
  Content: typeof DropdownContent;
  Divider: typeof DropdownDivider;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
  Trigger: typeof DropdownTrigger;
};

export default Dropdown;
