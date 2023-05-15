import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface PanelIconProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function PanelIcon(props: PanelIconProps): ReactElement;
