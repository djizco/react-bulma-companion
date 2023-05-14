import React, { ReactNode, ReactElement } from 'react';

import { ElementProps, Color } from '../../Element';

export interface IconTextProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color: Color | string;
}

export default function IconText(props: IconTextProps): ReactElement;
