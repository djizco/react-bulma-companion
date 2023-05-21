import { ElementComponent } from '../../Element';

export interface BreadcrumbListItemProps {
  active?: boolean;
}

declare const BreadcrumbListItem: ElementComponent<BreadcrumbListItemProps, 'li'>;

export default BreadcrumbListItem;
