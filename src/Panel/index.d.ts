import React, { ReactNode, ReactElement, AnchorHTMLAttributes, LabelHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../Element';

import { PanelBlockProps } from './PanelBlock';
import { PanelHeadingProps } from './PanelHeading';
import { PanelIconProps } from './PanelIcon';
import { PanelTabProps } from './PanelTab';
import { PanelTabsProps } from './PanelTabs';

export interface PanelProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor;
}

declare function Panel(props: PanelProps): ReactElement;

declare namespace Panel {
  export function Block(
    props: PanelBlockProps & AnchorHTMLAttributes<HTMLAnchorElement> & LabelHTMLAttributes<HTMLLabelElement>
  ): ReactElement;
  export function Heading(props: PanelHeadingProps): ReactElement;
  export function Icon(props: PanelIconProps): ReactElement;
  export function Tab(props: PanelTabProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function Tabs(props: PanelTabsProps): ReactElement;
}

export default Panel;
