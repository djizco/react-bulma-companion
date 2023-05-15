import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface DropdownTriggerProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function DropdownTrigger(props: DropdownTriggerProps): ReactElement;
