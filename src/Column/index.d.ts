import { ElementWithoutResponsiveComponent } from '../Element';

export type ColumnSize =
  'full' | 'half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters' |
  'one-fifth' | 'two-fifths' | 'three-fifths' | 'four-fifths' |
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type ColumnScreenSize = {
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
};

export interface ColumnProps {
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
  mobile?: ColumnScreenSize;
  tablet?: ColumnScreenSize;
  touch?: ColumnScreenSize;
  desktop?: ColumnScreenSize;
  widescreen?: ColumnScreenSize;
  fullhd?: ColumnScreenSize;
}

declare const Column: ElementWithoutResponsiveComponent<ColumnProps, 'div'>;

export default Column;
