import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface FileNameProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function FileName(props: FileNameProps): ReactElement;
