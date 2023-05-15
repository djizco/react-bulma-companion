import React, { ReactNode, ReactElement, SelectHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface SelectContentProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
}

export default function SelectContent(
  props: SelectContentProps & SelectHTMLAttributes<HTMLSelectElement>
): ReactElement;
