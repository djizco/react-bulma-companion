import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface PaginationNextProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  disabled?: boolean;
}

export default function PaginationNext(
  props: PaginationNextProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
