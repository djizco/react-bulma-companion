import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

import { IconTextProps } from './IconText';

export interface IconProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

declare function Icon(props: IconProps): ReactElement;

declare namespace Icon {
  export function Text(props: IconTextProps): ReactElement;
}

export default Icon;
