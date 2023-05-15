import React, { ReactElement, ButtonHTMLAttributes } from 'react';

import { ElementWithoutChildrenProps } from '../Element';

export interface DeleteProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
}

export default function Delete(props: DeleteProps & ButtonHTMLAttributes<HTMLButtonElement>): ReactElement;
