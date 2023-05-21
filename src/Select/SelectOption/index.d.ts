import { ElementComponent } from '../../Element';

export interface SelectOptionProps {
  selected?: boolean;
}

declare const SelectOption: ElementComponent<SelectOptionProps, 'option'>;

export default SelectOption;
