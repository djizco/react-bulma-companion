import { ElementComponent } from '../Element';
import { MainColor } from '../types';

export type TagSize = 'normal' | 'medium' | 'large';

export interface TagProps {
  color?: MainColor;
  light?: boolean;
  size?: TagSize;
  rounded?: boolean;
  delete?: boolean;
}

declare const Tag: ElementComponent<TagProps, 'span'>;

export default Tag;
