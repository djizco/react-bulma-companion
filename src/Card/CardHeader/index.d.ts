import React, { ReactNode, ReactElement, LabelHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface CardHeaderProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function CardHeader(props: CardHeaderProps & LabelHTMLAttributes<HTMLLabelElement>): ReactElement;
