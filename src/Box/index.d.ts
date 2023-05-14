import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface BoxProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function Box(props: BoxProps): ReactElement;
