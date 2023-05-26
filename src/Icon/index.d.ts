import { ElementComponent } from '../Element';
import { Color } from '../types';

import IconText from './IconText';

export type IconSize = 'small' | 'medium' | 'large';
export type IconColor = Color;
export type IconAlign = 'left' | 'right';

export interface IconProps {
  color?: IconColor;
  size?: IconSize;
  align?: IconAlign;
}

declare const Icon: ElementComponent<IconProps, 'span'> & {
  Text: typeof IconText;
};

export default Icon;
