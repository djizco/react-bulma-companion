import React, { ReactNode, ReactElement, TdHTMLAttributes, ThHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { TableBodyProps } from './TableBody';
import { TableContainerProps } from './TableContainer';
import { TableDataCellProps } from './TableDataCell';
import { TableFootProps } from './TableFoot';
import { TableHeadProps } from './TableHead';
import { TableHeadCellProps } from './TableHeadCell';
import { TableRowProps } from './TableRow';

export interface TableProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
}

declare function Table(props: TableProps): ReactElement;

declare namespace Table {
  export function Body(props: TableBodyProps): ReactElement;
  export function Container(props: TableContainerProps): ReactElement;
  export function DataCell(props: TableDataCellProps & TdHTMLAttributes<HTMLTableDataCellElement>): ReactElement;
  export function Foot(props: TableFootProps): ReactElement;
  export function Head(props: TableHeadProps): ReactElement;
  export function HeadCell(props: TableHeadCellProps & ThHTMLAttributes<HTMLTableHeaderCellElement>): ReactElement;
  export function Row(props: TableRowProps): ReactElement;
}

export default Table;
