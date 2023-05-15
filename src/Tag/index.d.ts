import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../Element';

export interface TagProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor;
  light?: boolean;
  size?: 'normal' | 'medium' | 'large';
  rounded?: boolean;
  delete?: boolean;
}

export default function Tag(props: TagProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
