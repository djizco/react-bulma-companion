import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface TableRowProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  selected?: boolean;
}

export default function TableRow(props: TableRowProps): ReactElement;
