import React, { ReactElement, TextareaHTMLAttributes } from 'react';

import { ElementWithoutChildrenProps, MainColor } from '../Element';

export interface TextareaProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
  color?: MainColor;
  size?: 'small' | 'medium' | 'large';
  fixed?: boolean;
  inline?: boolean;
  fullwidth?: boolean;
  active?: boolean;
  hovered?: boolean;
  focused?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export default function Textarea(props: TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>): ReactElement;
