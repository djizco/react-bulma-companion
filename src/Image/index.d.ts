import { ElementComponent } from '../Element';

import ImageContent from './ImageContent';

export interface ImageProps {}

declare const Image: ElementComponent<ImageProps, 'figure'> & {
  Content: typeof ImageContent;
};

export default Image;
