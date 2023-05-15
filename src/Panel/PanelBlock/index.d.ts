import { ReactNode, ReactElement, ElementType, AnchorHTMLAttributes, LabelHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface PanelBlockProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  active?: boolean;
  wrapped?: boolean;
}

export default function PanelBlock(
  props: PanelBlockProps & AnchorHTMLAttributes<HTMLAnchorElement> & LabelHTMLAttributes<HTMLLabelElement>
): ReactElement;
