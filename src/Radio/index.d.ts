import React, { ReactNode, ReactElement, LabelHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

export interface RadioProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  disabled?: boolean;
}

export default function Radio(props: RadioProps & LabelHTMLAttributes<HTMLLabelElement>): ReactElement;
