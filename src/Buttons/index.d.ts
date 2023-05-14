import React, { ReactNode, ReactElement } from 'react';

export interface ButtonsProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
  addons?: boolean;
  align?: 'center' | 'right';
}

export default function Buttons(props: ButtonsProps): ReactElement;
