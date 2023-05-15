import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface ModalCardBodyProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function ModalCardBody(props: ModalCardBodyProps): ReactElement;
