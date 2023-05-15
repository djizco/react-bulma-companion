import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface PaginationListProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function PaginationList(props: PaginationListProps): ReactElement;
