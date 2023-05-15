import React, { ReactNode, ReactElement } from 'react';

import { ElementProps, MainColor } from '../Element';

import { HeroBodyProps } from './HeroBody';
import { HeroButtonsProps } from './HeroButtons';
import { HeroFootProps } from './HeroFoot';
import { HeroHeadProps } from './HeroHead';
import { HeroVideoProps } from './HeroVideo';

export interface HeroProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor;
  size?: 'small' | 'medium' | 'large' | 'halfheight' | 'fullheight' | 'fullheight-navbar';
  bold?: boolean;
}

declare function Hero(props: HeroProps): ReactElement;

declare namespace Hero {
  export function Body(props: HeroBodyProps): ReactElement;
  export function Buttons(props: HeroButtonsProps): ReactElement;
  export function Foot(props: HeroFootProps): ReactElement;
  export function Head(props: HeroHeadProps): ReactElement;
  export function Video(props: HeroVideoProps): ReactElement;
}

export default Hero;
