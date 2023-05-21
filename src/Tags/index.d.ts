import { ElementComponent } from '../Element';

export type TagsSize = 'medium' | 'large';
export type TagsAlign = 'center' | 'right';

export interface TagsProps {
  size?: TagsSize;
  addons?: boolean;
  align?: TagsAlign;
}

declare const Tags: ElementComponent<TagsProps, 'div'>;

export default Tags;
