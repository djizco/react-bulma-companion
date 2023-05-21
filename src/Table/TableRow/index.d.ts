import { ElementComponent } from '../../Element';

export interface TableRowProps {
  selected?: boolean;
}

declare const TableRow: ElementComponent<TableRowProps, 'tr'>;

export default TableRow;
