import React, { ReactNode, ReactElement } from 'react';

import { ElementProps, MainColor } from '../Element';

export interface NotificationProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor;
  light?: boolean;
}

export default function Notification(props: NotificationProps): ReactElement;
