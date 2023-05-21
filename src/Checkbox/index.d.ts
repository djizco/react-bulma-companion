import { ElementComponent } from '../Element';

export interface CheckboxProps {
  disabled?: boolean;
}

declare const Checkbox: ElementComponent<CheckboxProps, 'label'>;

export default Checkbox;
