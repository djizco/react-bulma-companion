import React, { ReactNode, ReactElement } from 'react';

import { ElementWithoutScreenSizeProps } from '../Element';

import { LevelItemProps } from './LevelItem';
import { LevelLeftProps } from './LevelLeft';
import { LevelRightProps } from './LevelRight';

export interface LevelProps extends ElementWithoutScreenSizeProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  mobile?: boolean;
}

declare function Level(props: LevelProps): ReactElement;

declare namespace Level {
  export function Item(props: LevelItemProps): ReactElement;
  export function Left(props: LevelLeftProps): ReactElement;
  export function Right(props: LevelRightProps): ReactElement;
}

export default Level;
