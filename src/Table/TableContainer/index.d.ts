import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface TableContainerProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function TableContainer(props: TableContainerProps): ReactElement;
