import React, { ReactNode, ReactElement } from 'react';

import { ElementProps, MainColor } from '../Element';

export interface HelpProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor | 'text';
}

export default function Help(props: HelpProps): ReactElement;
