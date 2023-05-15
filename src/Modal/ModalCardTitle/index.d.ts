import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface ModalCardTitleProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function ModalCardTitle(props: ModalCardTitleProps): ReactElement;
