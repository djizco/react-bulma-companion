import React, { ReactNode, ReactElement } from 'react';

import { ElementProps, MainColor } from '../Element';

import { MessageBodyProps } from './MessageBody';
import { MessageHeaderProps } from './MessageHeader';

export interface MessageProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor,
  size: 'small' | 'medium' | 'large';
}

declare function Message(props: MessageProps): ReactElement;

declare namespace Message {
  export function Body(props: MessageBodyProps): ReactElement;
  export function Header(props: MessageHeaderProps): ReactElement;
}

export default Message;
