import React, { InputHTMLAttributes, ReactElement } from 'react';

import { ElementWithoutChildrenProps, MainColor } from '../Element';

export interface InputProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
  type?: 'text' | 'password' | 'email' | 'tel';
  color?: MainColor;
  size?: 'small' | 'medium' | 'large';
  inline?: boolean;
  fullwidth?: boolean;
  active?: boolean;
  rounded?: boolean;
  hovered?: boolean;
  focused?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  static?: boolean;
}

export default function Input(props: InputProps & InputHTMLAttributes<HTMLInputElement>): ReactElement;
