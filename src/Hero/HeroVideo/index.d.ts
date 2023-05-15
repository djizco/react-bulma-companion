import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface HeroVideoProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  transparent?: boolean;
}

export default function HeroVideo(props: HeroVideoProps): ReactElement;
