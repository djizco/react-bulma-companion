import React, { ReactElement } from 'react';

import { ElementWithoutChildrenProps } from '../../Element';

export interface DropdownDividerProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
}

export default function DropdownDivider(props: DropdownDividerProps): ReactElement;
