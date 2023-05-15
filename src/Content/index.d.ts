import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface ContentProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'normal' | 'medium' | 'large';
}

export default function Content(props: ContentProps): ReactElement;
