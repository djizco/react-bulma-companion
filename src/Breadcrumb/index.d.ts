import { ElementComponent } from '../Element';

import BreadcrumbList from './BreadcrumbList';
import BreadcrumbListItem from './BreadcrumbListItem';

export type BreadcrumbAlign = 'center' | 'right';
export type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds';
export type BreadcrumbSize = 'small' | 'medium' | 'large';

export interface BreadcrumbProps {
  active?: boolean;
  align?: BreadcrumbAlign;
  separator?: BreadcrumbSeparator;
  size?: BreadcrumbSize;
}

declare const Breadcrumb: ElementComponent<BreadcrumbProps, 'nav'> & {
  List: typeof BreadcrumbList;
  ListItem: typeof BreadcrumbListItem;
};

export default Breadcrumb;
