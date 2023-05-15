import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface NavbarBrandProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function NavbarBrand(props: NavbarBrandProps): ReactElement;
