import { ElementComponent } from '../Element';

import TableBody from './TableBody';
import TableContainer from './TableContainer';
import TableDataCell from './TableDataCell';
import TableFoot from './TableFoot';
import TableHead from './TableHead';
import TableHeadCell from './TableHeadCell';
import TableRow from './TableRow';

export type TableSize = 'small' | 'medium' | 'large';

export interface TableProps {
  size?: TableSize;
}

declare const Table: ElementComponent<TableProps, 'table'> & {
  Body: typeof TableBody;
  Container: typeof TableContainer;
  DataCell: typeof TableDataCell;
  Foot: typeof TableFoot;
  Head: typeof TableHead;
  HeadCell: typeof TableHeadCell;
  Row: typeof TableRow;
};

export default Table;
