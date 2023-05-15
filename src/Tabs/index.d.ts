import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { TabsLinkProps } from './TabsLink';
import { TabsListProps } from './TabsList';
import { TabsListItemProps } from './TabsListItem';

export interface TabsProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

declare function Tabs(props: TabsProps): ReactElement;

declare namespace Tabs {
  export function Link(props: TabsLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function List(props: TabsListProps): ReactElement;
  export function ListItem(props: TabsListItemProps): ReactElement;
}

export default Tabs;
