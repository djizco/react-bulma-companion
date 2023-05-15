import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface HeroBodyProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function HeroBody(props: HeroBodyProps): ReactElement;
