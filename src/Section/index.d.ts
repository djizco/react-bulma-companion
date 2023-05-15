import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface SectionProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'medium' | 'large';
}

export default function Section(props: SectionProps): ReactElement;
