import { ElementComponent } from '../Element';

export type ControlSize = 'small' | 'medium' | 'large';

export interface ControlProps {
  iconsLeft?: boolean;
  iconsRight?: boolean;
  expanded?: boolean;
  loading?: boolean;
  size?: ControlSize;
}

declare const Control: ElementComponent<ControlProps, 'div'>;

export default Control;
