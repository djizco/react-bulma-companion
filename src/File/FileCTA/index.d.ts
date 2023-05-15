import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface FileCTAProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function FileCTA(props: FileCTAProps): ReactElement;
