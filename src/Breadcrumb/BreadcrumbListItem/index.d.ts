import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface BreadcrumbListItemProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  active?: boolean;
}

export default function BreadcrumbListItem(props: BreadcrumbListItemProps): ReactElement;
