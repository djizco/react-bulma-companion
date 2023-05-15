import React, { ReactNode, ReactElement, LabelHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

export interface LabelProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
}

export default function Label(props: LabelProps & LabelHTMLAttributes<HTMLLabelElement>): ReactElement;
