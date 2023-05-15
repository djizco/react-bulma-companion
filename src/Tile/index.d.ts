import React, { ReactNode, ReactElement } from 'react';

import { ElementProps, MainColor } from '../Element';

export interface TileProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  type?: 'ancestor' | 'parent' | 'child';
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  color?: MainColor;
  light?: boolean;
  vertical?: boolean;
  box?: boolean;
}

export default function Tile(props: TileProps): ReactElement;
