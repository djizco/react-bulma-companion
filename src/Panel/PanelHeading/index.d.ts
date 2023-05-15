import { ReactNode, ReactElement, ElementType } from 'react';

import { ElementProps } from '../../Element';

export interface PanelHeadingProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

export default function PanelHeading(props: PanelHeadingProps): ReactElement;
