import { ElementComponent } from '../../Element';

export interface PaginationLinkProps {
  current?: boolean;
  disabled?: boolean;
}

declare const PaginationLink: ElementComponent<PaginationLinkProps, 'a'>;

export default PaginationLink;
