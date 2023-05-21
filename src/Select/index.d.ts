import { ElementComponent } from '../Element';
import { MainColor } from '../types';

import SelectContent from './SelectContent';
import SelectOption from './SelectOption';

export type SelectColor = MainColor;
export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectProps {
  color?: SelectColor;
  size?: SelectSize,
  fullwidth?: boolean;
  multiple?: boolean;
  rounded?: boolean;
  loading?: boolean;
}

declare const Select: ElementComponent<SelectProps, 'div'> & {
  Content: typeof SelectContent;
  Option: typeof SelectOption;
};

export default Select;
