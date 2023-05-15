import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface LevelItemProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function LevelItem(props: LevelItemProps): ReactElement;
