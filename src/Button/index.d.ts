import { ElementComponent } from '../Element';
import {  MainColor, Size } from '../types';

export type ButtonColor = MainColor | 'text' | 'ghost';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  type?: ButtonType;
  color?: ButtonColor;
  light?: boolean;
  size?: Size;
  responsive?: boolean;
  fullwidth?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  selected?: boolean;
  loading?: boolean;
  static?: boolean;
  disabled?: boolean;
}

declare const Button: ElementComponent<ButtonProps, 'button'>;

export default Button;
