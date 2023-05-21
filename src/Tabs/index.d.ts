import { ElementComponent } from '../Element';

import TabsLink from './TabsLink';
import TabsList from './TabsList';
import TabsListItem from './TabsListItem';

export interface TabsProps {}

declare const Tabs: ElementComponent<TabsProps, 'div'> & {
  Link: typeof TabsLink;
  List: typeof TabsList;
  ListItem: typeof TabsListItem;
};

export default Tabs;
