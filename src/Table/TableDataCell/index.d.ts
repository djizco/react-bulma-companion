import { ReactNode, ReactElement, ElementType, TdHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../../Element';

export interface TableDataCellProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  color: MainColor;
  selected?: boolean;
  narrow?: boolean;
  vcentered?: boolean;
}

export default function TableDataCell(
  props: TableDataCellProps & TdHTMLAttributes<HTMLTableDataCellElement>
): ReactElement;
