import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface NavbarMenuProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  active?: boolean;
}

export default function NavbarMenu(props: NavbarMenuProps): ReactElement;
