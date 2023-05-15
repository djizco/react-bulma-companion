import React, { ReactElement } from 'react';

import { ElementWithoutChildrenProps } from '../Element';

export interface LoaderProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
}

export default function Loader(props: LoaderProps): ReactElement;
