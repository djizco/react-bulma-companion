import { ElementComponent } from '../../Element';

export interface TabsListItemProps {
  active?: boolean;
}

declare const TabsListItem: ElementComponent<TabsListItemProps, 'li'>;

export default TabsListItem;
