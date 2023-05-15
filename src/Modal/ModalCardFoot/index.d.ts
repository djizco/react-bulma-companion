import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface ModalCardFootProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function ModalCardFoot(props: ModalCardFootProps): ReactElement;
