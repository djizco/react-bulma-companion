import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface TabsListProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function TabsList(props: TabsListProps): ReactElement;
