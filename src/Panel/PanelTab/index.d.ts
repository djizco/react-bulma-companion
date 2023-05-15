import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface PanelTabProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  active?: boolean;
}

export default function PanelTab(
  props: PanelTabProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
