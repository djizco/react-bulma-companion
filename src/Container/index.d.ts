import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface ContainerProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  breakpoint?: 'widescreen' | 'fullhd' | 'max-desktop' | 'max-widescreen';
  fluid?: boolean;
}

export default function Container(props: ContainerProps): ReactElement;
