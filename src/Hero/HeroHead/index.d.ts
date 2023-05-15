import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface HeroHeadProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function HeroHead(props: HeroHeadProps): ReactElement;
