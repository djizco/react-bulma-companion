// Misc
export type Size = 'small' | 'normal' | 'medium' | 'large';

// Colors
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

// Text
export type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type TextAlign = 'center' | 'justify' | 'left' | 'right';
export type TextTransform = 'capitalize' | 'lowercase' | 'uppercase' | 'italic' | 'underline';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type Font = 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code';

// Display
export type Display = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
export type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | 'auto';
export type Pull = 'left' | 'right';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexSize = '0' | '1' | '2' | '3' | '4' | '5';

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
