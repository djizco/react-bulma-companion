import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { MenuLabelProps } from './MenuLabel';
import { MenuLinkProps } from './MenuLink';
import { MenuListProps } from './MenuList';
import { MenuListItemProps } from './MenuListItem';

export interface MenuProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
}

declare function Menu(props: MenuProps): ReactElement;

declare namespace Menu {
  export function Label(props: MenuLabelProps): ReactElement;
  export function Link(props: MenuLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function List(props: MenuListProps): ReactElement;
  export function ListItem(props: MenuListItemProps): ReactElement;
}

export default Menu;
