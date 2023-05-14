import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface TitleProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  subtitle?: boolean;
  size?: '1' | '2' | '3' | '4' | '5' | '6';
  spaced?: boolean;
}

export default function Title(props: TitleProps): ReactElement;
