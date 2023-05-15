import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface PaginationLinkProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  current?: boolean;
  disabled?: boolean;
}

export default function PaginationLink(
  props: PaginationLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
