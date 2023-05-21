import { ElementComponent } from '../Element';
import { MainColor } from '../types';

import HeroBody from './HeroBody';
import HeroButtons from './HeroButtons';
import HeroFoot from './HeroFoot';
import HeroHead from './HeroHead';
import HeroVideo from './HeroVideo';

export type HeroSize = 'small' | 'medium' | 'large' | 'halfheight' | 'fullheight' | 'fullheight-navbar';

export interface HeroProps {
  color?: MainColor;
  size?: HeroSize;
  bold?: boolean;
}

declare const Hero: ElementComponent<HeroProps, 'section'> & {
  Body: typeof HeroBody;
  Buttons: typeof HeroButtons;
  Foot: typeof HeroFoot;
  Head: typeof HeroHead;
  Video: typeof HeroVideo;
};

export default Hero;
