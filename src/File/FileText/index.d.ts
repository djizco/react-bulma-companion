import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface FileTextProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function FileText(props: FileTextProps): ReactElement;
