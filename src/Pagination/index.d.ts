import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { PaginationEllipsisProps } from './PaginationEllipsis';
import { PaginationLinkProps } from './PaginationLink';
import { PaginationListProps } from './PaginationList';
import { PaginationListItemProps } from './PaginationListItem';
import { PaginationNextProps } from './PaginationNext';
import { PaginationPreviousProps } from './PaginationPrevious';

export interface PaginationProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
  align?: 'center' | 'right';
  rounded?: boolean;
}

declare function Pagination(props: PaginationProps): ReactElement;

declare namespace Pagination {
  export function Ellipsis(props: PaginationEllipsisProps): ReactElement;
  export function List(props: PaginationListProps): ReactElement;
  export function ListItem(props: PaginationListItemProps): ReactElement;
  export function Link(props: PaginationLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function Next(props: PaginationNextProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function Previous(props: PaginationPreviousProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
}

export default Pagination;
