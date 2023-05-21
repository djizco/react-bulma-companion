import { ElementWithoutChildrenComponent } from '../Element';
import { MainColor } from '../types';

export type TextareaSize = 'small' | 'medium' | 'large';

export interface TextareaProps {
  color?: MainColor;
  size?: TextareaSize;
  fixed?: boolean;
  inline?: boolean;
  fullwidth?: boolean;
  active?: boolean;
  hovered?: boolean;
  focused?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

declare const Textarea: ElementWithoutChildrenComponent<TextareaProps, 'textarea'>;

export default Textarea;
