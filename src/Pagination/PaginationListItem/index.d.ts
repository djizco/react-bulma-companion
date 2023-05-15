import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface PaginationListItemProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function PaginationListItem(props: PaginationListItemProps): ReactElement;
