import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface FieldBodyProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function FieldBody(props: FieldBodyProps): ReactElement;
