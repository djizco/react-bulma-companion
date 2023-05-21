import { ElementWithoutResponsiveComponent } from '../Element';

export type ColumnGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type ColumnsScreenSize = {
  gap?: ColumnGap;
};

export type ColumnsScreenSizeOnly = {
  only?: boolean;
} & ColumnsScreenSize;

export type ColumnsActivate = 'mobile' | 'tablet' | 'desktop';

export interface ColumnsProps {
  gap?: ColumnGap;
  mobile?: ColumnsScreenSize;
  tablet?: ColumnsScreenSizeOnly;
  touch?: ColumnsScreenSize;
  desktop?: ColumnsScreenSizeOnly;
  widescreen?: ColumnsScreenSizeOnly;
  fullhd?: ColumnsScreenSize;
  activate?: ColumnsActivate;
  centered?: boolean;
  vcentered?: boolean;
  gapless?: boolean;
  multiline?: boolean;
}

declare const Columns: ElementWithoutResponsiveComponent<ColumnsProps, 'div'>;

export default Columns;
