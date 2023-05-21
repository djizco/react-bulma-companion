import { ElementComponent } from '../Element';

export type SectionSize = 'medium' | 'large';

export interface SectionProps {
  size?: SectionSize;
}

declare const Section: ElementComponent<SectionProps, 'section'>;

export default Section;
