import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { DropdownContentProps } from './DropdownContent';
import { DropdownDividerProps } from './DropdownDivider';
import { DropdownItemProps } from './DropdownItem';
import { DropdownMenuProps } from './DropdownMenu';
import { DropdownTriggerProps } from './DropdownTrigger';

export interface DropdownProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  active?: boolean;
  hoverable?: boolean;
  right?: boolean;
  up?: boolean;
}

declare function Dropdown(props: DropdownProps): ReactElement;

declare namespace Dropdown {
  export function Content(props: DropdownContentProps): ReactElement;
  export function Divider(props: DropdownDividerProps): ReactElement;
  export function Item(props: DropdownItemProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function Menu(props: DropdownMenuProps): ReactElement;
  export function Trigger(props: DropdownTriggerProps): ReactElement;
}

export default Dropdown;
