import { ElementComponent } from '../Element';

import FieldBody from './FieldBody';
import FieldLabel from './FieldLabel';

export type FieldAlign = 'center' | 'right';

export interface FieldProps {
  grouped?: boolean;
  addons?: boolean;
  align?: FieldAlign;
  multiline?: boolean;
  fullwidth?: boolean;
  horizontal?: boolean;
  expanded?: boolean;
  narrow?: boolean;
}

declare const Field: ElementComponent<FieldProps, 'div'> & {
  Body: typeof FieldBody;
  Label: typeof FieldLabel;
};

export default Field;
