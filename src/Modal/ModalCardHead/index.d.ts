import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface ModalCardHeadProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function ModalCardHead(props: ModalCardHeadProps): ReactElement;
