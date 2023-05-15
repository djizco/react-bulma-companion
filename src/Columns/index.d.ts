import React, { ReactNode, ReactElement } from 'react';

import { ElementWithoutScreenSizeProps } from '../Element';

export type ColumnGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type ColumnsScreenSize = {
  gap?: ColumnGap;
};

export type ColumnsScreenSizeOnly = {
  gap?: ColumnGap;
  only?: boolean;
};

export interface ColumnsProps extends ElementWithoutScreenSizeProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  gap?: ColumnGap;
  mobile?: ColumnsScreenSize;
  tablet?: ColumnsScreenSizeOnly;
  touch?: ColumnsScreenSize;
  desktop?: ColumnsScreenSizeOnly;
  widescreen?: ColumnsScreenSizeOnly;
  fullhd?: ColumnsScreenSize;
  activate?: 'mobile' | 'tablet' | 'desktop';
  centered?: boolean;
  vcentered?: boolean;
  gapless?: boolean;
  multiline?: boolean;
}

export default function Columns(props: ColumnsProps): ReactElement;
