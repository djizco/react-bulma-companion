import { ElementComponent } from '../Element';

export interface RadioProps {
  disabled?: boolean;
}

declare const Radio: ElementComponent<RadioProps, 'label'>;

export default Radio;
