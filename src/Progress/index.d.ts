import { ElementComponent } from '../Element';
import { MainColor } from '../types';

export type ProgressColor = MainColor;
export type ProgressSize = 'small' | 'medium' | 'large';

export interface ProgressProps {
  color?: ProgressColor;
  size?: ProgressSize;
}

declare const Progress: ElementComponent<ProgressProps, 'progress'>;

export default Progress;
