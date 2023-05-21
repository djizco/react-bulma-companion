import { ElementComponent } from '../Element';
import { MainColor } from '../types';

export type HelpColor = MainColor | 'text';

export interface HelpProps {
  color?: HelpColor;
}

declare const Help: ElementComponent<HelpProps, 'p'>;

export default Help;
