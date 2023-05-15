import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface ControlProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  iconsLeft?: boolean;
  iconsRight?: boolean;
  expanded?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function Control(props: ControlProps): ReactElement;
