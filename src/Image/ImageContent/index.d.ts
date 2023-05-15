import React, { ReactElement, ImgHTMLAttributes } from 'react';

import { ElementWithoutChildrenProps } from '../../Element';

export interface ImageContentProps extends ElementWithoutChildrenProps {
  className?: string;
  component?: React.ElementType;
  rounded?: boolean;
}

export default function ImageContent(props: ImageContentProps & ImgHTMLAttributes<HTMLImageElement>): ReactElement;
