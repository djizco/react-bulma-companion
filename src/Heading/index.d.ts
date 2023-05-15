import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface HeadingProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function Heading(props: HeadingProps): ReactElement;
