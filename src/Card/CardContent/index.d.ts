import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface CardContentProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function CardContent(props: CardContentProps): ReactElement;
