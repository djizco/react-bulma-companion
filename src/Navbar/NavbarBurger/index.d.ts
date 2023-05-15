import React, { ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementWithoutChildrenProps } from '../../Element';

export interface NavbarBurgerProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
  active?: boolean;
}

export default function NavbarBurger(
  props: NavbarBurgerProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
