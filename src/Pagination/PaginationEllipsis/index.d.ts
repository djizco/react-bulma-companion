import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface PaginationEllipsisProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function PaginationEllipsis(props: PaginationEllipsisProps): ReactElement;
