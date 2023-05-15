import React, { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';

import { ElementWithoutChildrenProps } from '../../Element';

export interface ModalCloseProps extends ElementWithoutChildrenProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
}

export default function ModalClose(props: ModalCloseProps & ButtonHTMLAttributes<HTMLButtonElement>): ReactElement;
