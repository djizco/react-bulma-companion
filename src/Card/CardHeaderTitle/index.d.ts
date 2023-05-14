import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface CardHeaderTitleProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  centered?: boolean;
}

export default function CardHeaderTitle(props: CardHeaderTitleProps): ReactElement;
