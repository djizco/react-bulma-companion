import { ElementComponent } from '../Element';

import MediaContent from './MediaContent';
import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';

export interface MediaProps {}

declare const Media: ElementComponent<MediaProps, 'article'> & {
  Content: typeof MediaContent;
  Left: typeof MediaLeft;
  Right: typeof MediaRight;
};

export default Media;
