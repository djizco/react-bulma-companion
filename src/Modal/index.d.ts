import React, { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { ModalBackgroundProps } from './ModalBackground';
import { ModalCardProps } from './ModalCard';
import { ModalCardBodyProps } from './ModalCardBody';
import { ModalCardFootProps } from './ModalCardFoot';
import { ModalCardHeadProps } from './ModalCardHead';
import { ModalCardTitleProps } from './ModalCardTitle';
import { ModalCloseProps } from './ModalClose';
import { ModalContentProps } from './ModalContent';

export interface ModalProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  active?: boolean;
}

declare function Modal(props: ModalProps): ReactElement;

declare namespace Modal {
  export function Background(props: ModalBackgroundProps): ReactElement;
  export function Card(props: ModalCardProps): ReactElement;
  export function CardBody(props: ModalCardBodyProps): ReactElement;
  export function CardFoot(props: ModalCardFootProps): ReactElement;
  export function CardHead(props: ModalCardHeadProps): ReactElement;
  export function CardTitle(props: ModalCardTitleProps): ReactElement;
  export function Close(props: ModalCloseProps & ButtonHTMLAttributes<HTMLButtonElement>): ReactElement;
  export function Content(props: ModalContentProps): ReactElement;
}

export default Modal;
