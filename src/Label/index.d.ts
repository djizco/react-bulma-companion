import { ElementComponent } from '../Element';

export type LabelSize = 'small' | 'medium' | 'large';

export interface LabelProps {
  size?: LabelSize;
}

declare const Label: ElementComponent<LabelProps, 'label'>;

export default Label;
