import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface DropdownMenuProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function DropdownMenu(props: DropdownMenuProps): ReactElement;
