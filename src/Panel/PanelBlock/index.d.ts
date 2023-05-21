import { ElementComponent } from '../../Element';

export interface PanelBlockProps {
  active?: boolean;
  wrapped?: boolean;
}

declare const PanelBlock: ElementComponent<PanelBlockProps, 'div'>;

export default PanelBlock;
