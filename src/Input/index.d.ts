import { ElementWithoutChildrenComponent } from '../Element';
import { MainColor } from '../types';

export type InputType = 'text' | 'password' | 'email' | 'tel';
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps {
  type?: InputType;
  color?: MainColor;
  size?: InputSize;
  inline?: boolean;
  fullwidth?: boolean;
  active?: boolean;
  rounded?: boolean;
  hovered?: boolean;
  focused?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  static?: boolean;
}

declare const Input: ElementWithoutChildrenComponent<InputProps, 'input'>;

export default Input;
