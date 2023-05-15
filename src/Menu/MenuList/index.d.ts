import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface MenuListProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function MenuList(props: MenuListProps): ReactElement;
