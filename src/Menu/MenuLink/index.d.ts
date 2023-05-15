import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface MenuLinkProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  active?: boolean;
}

export default function MenuLink(props: MenuLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
