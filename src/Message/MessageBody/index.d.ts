import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface MessageBodyProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function MessageBody(props: MessageBodyProps): ReactElement;
