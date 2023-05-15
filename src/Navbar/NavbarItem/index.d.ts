import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface NavbarItemProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  active?: boolean;
  hasDropdown?: boolean;
  hasDropup?: boolean;
  hoverable?: boolean;
  expanded?: boolean;
  tab?: boolean;
}

export default function NavbarItem(props: NavbarItemProps): ReactElement;
