import React, { ReactNode, ReactElement, ImgHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { ImageContentProps } from './ImageContent';

export interface ImageProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

declare function Image(props: ImageProps): ReactElement;

declare namespace Image {
  export function Content(props: ImageContentProps & ImgHTMLAttributes<HTMLImageElement>): ReactElement;
}

export default Image;
