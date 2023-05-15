import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface NavbarLinkProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  arrowless?: boolean;
}

export default function NavbarLink(
  props: NavbarLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
