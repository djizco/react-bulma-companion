import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface TabsListItemProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  active?: boolean;
}

export default function TabsListItem(props: TabsListItemProps): ReactElement;
