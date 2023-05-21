import { ElementType, ReactNode, ReactElement, ComponentPropsWithoutRef } from 'react';

import {
  TextSize,
  TextAlign,
  Display,
  Color,
  TextTransform,
  TextWeight,
  Font,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignContent,
  AlignItem,
  AlignSelf,
  FlexSize,
  Pull,
  Spacing,
} from '../types';

// Responsive
export type ScreenSize = {
  textSize?: TextSize;
  textAlign?: TextAlign;
  display?: Display;
  hidden?: boolean;
};

// Props
export interface ElementProps<Tag> {
  component?: Tag,
  domRef?: React.RefObject<Tag>
  className?: string;
  children?: ReactNode;
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

export type ElementWithoutChildrenProps<Tag> =
  Omit<ElementProps<Tag>, 'children'>;

export type ElementWithoutResponsiveProps<Tag> =
  Omit<ElementProps<Tag>, 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd'>;

export type DeletedTagProps = 'children' | 'unselectable' | 'size';
export type TagProps<Tag extends ElementType> = Omit<ComponentPropsWithoutRef<Tag>, DeletedTagProps>;

// Components
export type ElementComponent<PropsFromComponent, DefaultTag extends ElementType> =
<Tag extends ElementType = DefaultTag>(
  props: & TagProps<Tag> & ElementProps<Tag> & PropsFromComponent
) => ReactElement;

export type ElementWithoutChildrenComponent<PropsFromComponent, DefaultTag extends ElementType> =
<Tag extends ElementType = DefaultTag>(
  props: & TagProps<Tag> & ElementWithoutChildrenProps<Tag> & PropsFromComponent
) => ReactElement;

export type ElementWithoutResponsiveComponent<PropsFromComponent, DefaultTag extends ElementType> =
<Tag extends ElementType = DefaultTag>(
  props: & TagProps<Tag> & ElementWithoutResponsiveProps<Tag> & PropsFromComponent
) => ReactElement;

declare const Element: ElementComponent<{}, 'div'>;

export default Element;
