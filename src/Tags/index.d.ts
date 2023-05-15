import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export interface TagsProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: 'medium' | 'large';
  addons?: boolean;
  align?: 'center' | 'right';
}

export default function Tags(props: TagsProps): ReactElement;
