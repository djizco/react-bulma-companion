import { ElementComponent } from '../Element';

export type TitleSize = '1' | '2' | '3' | '4' | '5' | '6';

export interface TitleProps {
  subtitle?: boolean;
  size?: TitleSize;
  spaced?: boolean;
}

declare const Title: ElementComponent<TitleProps, 'p'>;

export default Title;
