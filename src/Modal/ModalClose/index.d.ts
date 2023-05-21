import { ElementWithoutChildrenComponent } from '../../Element';

export type ModalCloseSize = 'small' | 'medium' | 'large';

export interface ModalCloseProps {
  size?: ModalCloseSize;
}

declare const ModalClose: ElementWithoutChildrenComponent<ModalCloseProps, 'button'>;

export default ModalClose;
