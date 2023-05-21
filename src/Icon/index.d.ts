import { ElementComponent } from '../Element';

import IconText from './IconText';

export interface IconProps {}

declare const Icon: ElementComponent<IconProps, 'span'> & {
  Text: typeof IconText;
};

export default Icon;
