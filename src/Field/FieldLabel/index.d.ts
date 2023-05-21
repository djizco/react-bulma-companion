import { ElementComponent } from '../../Element';
import { Size } from '../../types';

export type FieldLabelSize = Size;

export interface FieldLabelProps {
  size?: FieldLabelSize;
}

declare const FieldLabel: ElementComponent<FieldLabelProps, 'div'>;

export default FieldLabel;
