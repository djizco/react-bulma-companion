import { ElementComponent } from '../Element';
import { Size } from '../types';

export type ContentSize = Size;

export interface ContentProps {
  size?: ContentSize;
}

declare const Content: ElementComponent<ContentProps, 'div'>;

export default Content;
