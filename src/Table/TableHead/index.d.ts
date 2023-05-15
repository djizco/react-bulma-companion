import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface TableHeadProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function TableHead(props: TableHeadProps): ReactElement;
