import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../../Element';

export interface NavbarEndProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function NavbarEnd(props: NavbarEndProps): ReactElement;
