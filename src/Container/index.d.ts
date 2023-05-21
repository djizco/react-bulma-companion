import { ElementComponent } from '../Element';

export type ContainerBreakpoint = 'widescreen' | 'fullhd' | 'max-desktop' | 'max-widescreen';

export interface ContainerProps {
  breakpoint?: ContainerBreakpoint;
  fluid?: boolean;
}

declare const Container: ElementComponent<ContainerProps, 'div'>;

export default Container;
