import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../../Element';

export interface DropdownItemProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

export default function DropdownItem(
  props: DropdownItemProps & AnchorHTMLAttributes<HTMLAnchorElement>
): ReactElement;
