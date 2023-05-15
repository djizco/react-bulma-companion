import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface HeroFootProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function HeroFoot(props: HeroFootProps): ReactElement;
