import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface TabsLinkProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function TabsLink(
  props: TabsLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
