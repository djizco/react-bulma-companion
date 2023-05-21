import { ElementComponent } from '../../Element';
import { MainColor } from '../../types';

export type TableDataCellColor = MainColor;

export interface TableDataCellProps {
  color?: TableDataCellColor;
  selected?: boolean;
  narrow?: boolean;
  vcentered?: boolean;
}

declare const TableDataCell: ElementComponent<TableDataCellProps, 'td'>;

export default TableDataCell;
