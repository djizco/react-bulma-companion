import { ElementComponent } from '../Element';

export type ButtonsSize = 'small' | 'medium' | 'large';
export type ButtonsAlign = 'center' | 'right';

export interface ButtonsProps {
  size?: ButtonsSize;
  addons?: boolean;
  align?: ButtonsAlign;
}

declare const Buttons: ElementComponent<ButtonsProps, 'div'>;

export default Buttons;
