import { ElementComponent } from '../Element';

import ImageContent from './ImageContent';

export type ImageSize = '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128';
export type ImageRatio =
  'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' |
  '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3';

export interface ImageProps {
  fullwidth?: boolean;
  ratio?: ImageRatio;
  size?: ImageSize;
}

declare const Image: ElementComponent<ImageProps, 'figure'> & {
  Content: typeof ImageContent;
};

export default Image;
