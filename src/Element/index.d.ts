import { ReactNode, ReactElement, ElementType, HTMLAttributes } from 'react';

export type MainColor =
  'white' | 'black' | 'light' | 'dark' |
  'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

export type ShadeColor =
  'black-bis' | 'black-ter' | 'white-ter' | 'white-bis' |
  'grey-darker' | 'grey-dark' | 'grey' | 'grey-light' | 'grey-lighter';

export type LightColor =
  'primary-light' | 'link-light' | 'info-light' | 'success-light' | 'warning-light' | 'danger-light';

export type DarkColor =
  'primary-dark' | 'link-dark' | 'info-dark' | 'success-dark' | 'warning-dark' | 'danger-dark';

export type Color = MainColor | ShadeColor | LightColor | DarkColor;

export type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | 'auto';
export type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type TextAlign = 'center' | 'justify' | 'left' | 'right';
export type TextTransform = 'capitalize' | 'lowercase' | 'uppercase' | 'italic' | 'underline';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type Font = 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code';
export type Display = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type JustifyContent =
  'flex-start' | 'flex-end' | 'center' |
  'space-between' | 'space-around' | 'space-evenly' |
  'start' | 'end' | 'left' | 'right';

export type AlignContent =
  'flex-start' | 'flex-end' | 'center' |
  'space-between' | 'space-around' | 'space-evenly' |
  'stretch' | 'start' | 'end' | 'baseline';

export type AlignItem =
  'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' |
  'start' | 'end' | 'self-start' | 'self-end';

export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export type FlexSize = '0' | '1' | '2' | '3' | '4' | '5';

export type Pull = 'left' | 'right';

export type ScreenSize = {
  textSize?: TextSize;
  textAlign?: TextAlign;
  display?: Display;
  hidden?: boolean;
};

export type AllAttributes = Omit<HTMLAttributes<HTMLElement>, 'unselectable'>;

export interface ElementProps extends AllAttributes {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  backgroundColor?: Color | string;
  textColor?: Color | string;
  textSize?: TextSize;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  textWeight?: TextWeight;
  font?: Font;
  italic?: boolean;
  underlined?: boolean;
  display?: Display;
  invisible?: boolean;
  hidden?: boolean;
  screenReaderOnly?: boolean;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  alignItems?: AlignItem;
  alignSelf?: AlignSelf;
  flexGrow?: FlexSize;
  flexShrink?: FlexSize
  pull?: Pull;
  clearfix?: boolean;
  overlay?: boolean;
  clipped?: boolean;
  radiusless?: boolean;
  shadowless?: boolean;
  unselectable?: boolean;
  clickable?: boolean;
  relative?: boolean;
  margin?: Spacing | string | number;
  marginTop?: Spacing | string | number;
  marginRight?: Spacing | string | number;
  marginBottom?: Spacing | string | number;
  marginLeft?: Spacing | string | number;
  marginHorizontal?: Spacing | string | number;
  marginVertical?: Spacing | string | number;
  padding?: Spacing | string | number;
  paddingTop?: Spacing | string | number;
  paddingRight?: Spacing | string | number;
  paddingBottom?: Spacing | string | number;
  paddingLeft?: Spacing | string | number;
  paddingHorizontal?: Spacing | string | number;
  paddingVertical?: Spacing | string | number;
  mobile?: ScreenSize;
  touch?: ScreenSize;
  tablet?: ScreenSize;
  desktop?: ScreenSize;
  widescreen?: ScreenSize;
  fullhd?: ScreenSize;
}

export type ElementWithoutChildrenProps =
  Omit<ElementProps, 'children'>;

export type ElementWithoutScreenSizeProps =
  Omit<ElementProps, 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd'>;

export default function Element(props: ElementProps): ReactElement;
