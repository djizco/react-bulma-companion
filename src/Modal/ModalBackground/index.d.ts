import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface ModalBackgroundProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function ModalBackground(props: ModalBackgroundProps): ReactElement;
