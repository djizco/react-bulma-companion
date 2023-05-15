import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface PaginationPreviousProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  disabled?: boolean;
}

export default function PaginationPrevious(
  props: PaginationPreviousProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
