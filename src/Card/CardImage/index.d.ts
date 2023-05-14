import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface CardImageProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function CardImage(props: CardImageProps): ReactElement;
