import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface DropdownContentProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function DropdownContent(props: DropdownContentProps): ReactElement;
