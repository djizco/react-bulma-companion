import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface TableFootProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function TableFoot(props: TableFootProps): ReactElement;
