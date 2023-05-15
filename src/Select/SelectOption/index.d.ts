import React, { ReactNode, ReactElement, OptionHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface SelectOptionProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  selected?: boolean;
}

export default function SelectOption(
  props: SelectOptionProps & OptionHTMLAttributes<HTMLOptionElement>
): ReactElement;
