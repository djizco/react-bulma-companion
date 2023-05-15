import React, { ReactNode, ReactElement, LabelHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface FileLabelProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function FileLabel(props: FileLabelProps & LabelHTMLAttributes<HTMLLabelElement>): ReactElement;
