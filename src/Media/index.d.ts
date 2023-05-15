import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

import { MediaContentProps } from './MediaContent';
import { MediaLeftProps } from './MediaLeft';
import { MediaRightProps } from './MediaRight';

export interface MediaProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

declare function Media(props: MediaProps): ReactElement;

declare namespace Media {
  export function Content(props: MediaContentProps): ReactElement;
  export function Left(props: MediaLeftProps): ReactElement;
  export function Right(props: MediaRightProps): ReactElement;
}

export default Media;
