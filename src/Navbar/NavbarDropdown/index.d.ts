import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface NavbarDropdownProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  right?: boolean;
  boxed?: boolean;
}

export default function NavbarDropdown(props: NavbarDropdownProps): ReactElement;
