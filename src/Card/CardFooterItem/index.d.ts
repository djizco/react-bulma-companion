import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface CardFooterItemProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function CardFooterItem(
  props: CardFooterItemProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
