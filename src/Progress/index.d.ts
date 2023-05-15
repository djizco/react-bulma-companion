import React, { ReactNode, ReactElement, ProgressHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../Element';

export interface ProgressProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor;
  size?: 'small' | 'medium' | 'large';
}

export default function Progress(props: ProgressProps & ProgressHTMLAttributes<HTMLProgressElement>): ReactElement;
