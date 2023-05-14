import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export type ColumnGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

type OmittedElementProps = Omit<ElementProps, 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd'>;

export type ColumnsScreenSize = {
  gap?: ColumnGap;
};

export type ColumnsScreenSizeOnly = {
  gap?: ColumnGap;
  only?: boolean;
};

export interface ColumnsProps extends OmittedElementProps {
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
}

export default function Columns(props: ColumnsProps): ReactElement;
