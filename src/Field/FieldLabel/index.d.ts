import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface FieldLabelProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'normal' | 'medium' | 'large';
}

export default function FieldLabel(props: FieldLabelProps): ReactElement;
