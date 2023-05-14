import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface CardFooterProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function CardFooter(props: CardFooterProps): ReactElement;
