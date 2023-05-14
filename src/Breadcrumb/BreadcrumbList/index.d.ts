import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface BreadcrumbListProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function BreadcrumbList(props: BreadcrumbListProps): ReactElement;
