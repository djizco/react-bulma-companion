import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

import { BreadcrumbListProps } from './BreadcrumbList';
import { BreadcrumbListItemProps } from './BreadcrumbListItem';

export interface BreadcrumbProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  active?: boolean;
  align?: 'center' | 'right';
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: 'small' | 'medium' | 'large';
}

declare function Breadcrumb(props: BreadcrumbProps): ReactElement;

declare namespace Breadcrumb {
  export function List(props: BreadcrumbListProps): ReactElement;
  export function ListItem(props: BreadcrumbListItemProps): ReactElement;
}

export default Breadcrumb;
