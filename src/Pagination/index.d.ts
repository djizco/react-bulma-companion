import { ElementComponent } from '../Element';

import PaginationEllipsis from './PaginationEllipsis';
import PaginationLink from './PaginationLink';
import PaginationList from './PaginationList';
import PaginationListItem from './PaginationListItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export type PaginationSize = 'small' | 'medium' | 'large';
export type PaginationAlign = 'center' | 'right';

export interface PaginationProps {
  size?: PaginationSize;
  align?: PaginationAlign;
  rounded?: boolean;
}

declare const Pagination: ElementComponent<PaginationProps, 'nav'> & {
  Ellipsis: typeof PaginationEllipsis;
  Link: typeof PaginationLink;
  List: typeof PaginationList;
  ListItem: typeof PaginationListItem;
  Next: typeof PaginationNext;
  Previous: typeof PaginationPrevious;
};

export default Pagination;
