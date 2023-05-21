import { ElementComponent } from '../Element';
import { MainColor } from '../types';

import MessageBody from './MessageBody';
import MessageHeader from './MessageHeader';

export type MessageColor = MainColor;
export type MessageSize = 'small' | 'medium' | 'large';

export interface MessageProps {
  color?: MessageColor;
  size?: MessageSize;
}

declare const Message: ElementComponent<MessageProps, 'article'> & {
  Body: typeof MessageBody;
  Header: typeof MessageHeader;
};

export default Message;
