import { ElementComponent } from '../../Element';

export interface SelectContentProps {
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
}

declare const SelectContent: ElementComponent<SelectContentProps, 'select'>;

export default SelectContent;
