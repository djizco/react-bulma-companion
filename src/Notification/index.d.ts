import { ElementComponent } from '../Element';
import { MainColor } from '../types';

export type NotificationColor = MainColor;

export interface NotificationProps {
  color?: NotificationColor;
  light?: boolean;
}

declare const Notification: ElementComponent<NotificationProps, 'div'>;

export default Notification;
