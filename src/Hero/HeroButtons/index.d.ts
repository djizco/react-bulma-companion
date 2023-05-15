import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface HeroButtonsProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function HeroButtons(props: HeroButtonsProps): ReactElement;
