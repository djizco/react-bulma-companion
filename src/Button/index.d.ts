import React, { ReactNode, ReactElement } from 'react';

import { ElementProps, MainColor } from '../Element';

export type ButtonColor = MainColor | 'text' | 'ghost';

export interface ButtonProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  type?: 'button' | 'submit' | 'reset';
  color?: ButtonColor;
  light?: boolean;
  size?: 'small' | 'normal' | 'medium' | 'large';
  responsive?: boolean;
  fullwidth?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  selected?: boolean;
  loading?: boolean;
  static?: boolean;
  disabled?: boolean;
}

export default function Button(props: ButtonProps): ReactElement;
