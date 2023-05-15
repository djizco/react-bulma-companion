import { ReactNode, ReactElement, ElementType, ThHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../../Element';

export interface TableHeadCellProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  color?: MainColor;
  selected?: boolean;
  narrow?: boolean;
  vcentered?: boolean;
}

export default function TableHeadCell(
  props: TableHeadCellProps & ThHTMLAttributes<HTMLTableHeaderCellElement>
): ReactElement;
