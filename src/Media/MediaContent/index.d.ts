import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface MediaContentProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function MediaContent(props: MediaContentProps): ReactElement;
