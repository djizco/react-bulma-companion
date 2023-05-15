import React, { ReactNode, ReactElement, SelectHTMLAttributes, OptionHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../Element';

import { SelectContentProps } from './SelectContent';
import { SelectOptionProps } from './SelectOption';

export interface SelectProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor;
  size?: 'small' | 'medium' | 'large',
  fullwidth?: boolean;
  multiple?: boolean;
  rounded?: boolean;
  loading?: boolean;
}

declare function Select(props: SelectProps): ReactElement;

declare namespace Select {
  export function Content(props: SelectContentProps & SelectHTMLAttributes<HTMLSelectElement>): ReactElement;
  export function Option(props: SelectOptionProps & OptionHTMLAttributes<HTMLOptionElement>): ReactElement;
}

export default Select;
