import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

export interface BoxProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function Box(
  props: BoxProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
