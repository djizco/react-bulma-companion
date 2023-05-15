import React, { ReactElement, InputHTMLAttributes } from 'react';

import { ElementWithoutChildrenProps } from '../../Element';

export interface FileInputProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
}

export default function FileInput(props: FileInputProps & InputHTMLAttributes<HTMLInputElement>): ReactElement;
