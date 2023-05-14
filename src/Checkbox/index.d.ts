import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface CheckboxProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  disabled?: boolean;
}

export default function Checkbox(props: CheckboxProps): ReactElement;
