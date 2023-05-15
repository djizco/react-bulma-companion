import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface MenuLabelProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function MenuLabel(props: MenuLabelProps): ReactElement;
