import { ElementComponent } from '../../Element';
import { Color } from '../../types';

export type IconTextColor = Color | string;

export interface IconTextProps {
  color: IconTextColor;
}

declare const IconText: ElementComponent<IconTextProps, 'span'>;

export default IconText;
