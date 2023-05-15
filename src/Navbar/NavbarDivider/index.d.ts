import React, { ReactElement } from 'react';

import { ElementWithoutChildrenProps } from '../../Element';

export interface NavbarDividerProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
}

export default function NavbarDivider(props: NavbarDividerProps): ReactElement;
