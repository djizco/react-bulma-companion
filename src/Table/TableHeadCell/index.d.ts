import { ElementComponent } from '../../Element';
import { MainColor } from '../../types';

export type TableHeadCellColor = MainColor;

export interface TableHeadCellProps {
  color?: TableHeadCellColor;
  selected?: boolean;
  narrow?: boolean;
  vcentered?: boolean;
}

declare const TableHeadCell: ElementComponent<TableHeadCellProps, 'th'>;

export default TableHeadCell;
