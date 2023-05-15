import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface NavbarStartProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function NavbarStart(props: NavbarStartProps): ReactElement;
