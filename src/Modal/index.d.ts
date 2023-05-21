import { ElementComponent } from '../Element';

import ModalBackground from './ModalBackground';
import ModalCard from './ModalCard';
import ModalCardBody from './ModalCardBody';
import ModalCardFoot from './ModalCardFoot';
import ModalCardHead from './ModalCardHead';
import ModalCardTitle from './ModalCardTitle';
import ModalClose from './ModalClose';
import ModalContent from './ModalContent';

export interface ModalProps {
  active?: boolean;
}

declare const Modal: ElementComponent<ModalProps, 'div'> & {
  Background: typeof ModalBackground;
  Card: typeof ModalCard;
  CardBody: typeof ModalCardBody;
  CardFoot: typeof ModalCardFoot;
  CardHead: typeof ModalCardHead;
  CardTitle: typeof ModalCardTitle;
  Close: typeof ModalClose;
  Content: typeof ModalContent;
};

export default Modal;
