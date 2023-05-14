import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

export type ColumnSize =
  'full' | 'half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters' |
  'one-fifth' | 'two-fifths' | 'three-fifths' | 'four-fifths' |
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type ColumnScreenSize = {
  size?: ColumnSize;
  offSet?: ColumnSize;
  narrow?: boolean;
};

type OmittedElementProps = Omit<ElementProps, 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd'>;

export interface ColumnProps extends OmittedElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  size?: ColumnSize;
  offSet?: ColumnSize;
  narrow?: boolean;
  mobile?: ColumnScreenSize;
  tablet?: ColumnScreenSize;
  touch?: ColumnScreenSize;
  desktop?: ColumnScreenSize;
  widescreen?: ColumnScreenSize;
  fullhd?: ColumnScreenSize;
}

export default function Column(props: ColumnProps): ReactElement;
