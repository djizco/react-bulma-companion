import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';

import { ElementProps } from '../Element';

import { CardContentProps } from './CardContent';
import { CardFooterProps } from './CardFooter';
import { CardFooterItemProps } from './CardFooterItem';
import { CardHeaderProps } from './CardHeader';
import { CardHeaderIconProps } from './CardHeaderIcon';
import { CardHeaderTitleProps } from './CardHeaderTitle';
import { CardImageProps } from './CardImage';

export interface CardProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
}

declare function Card(props: CardProps): ReactElement;

declare namespace Card {
  export function Content(props: CardContentProps): ReactElement;
  export function Footer(props: CardFooterProps): ReactElement;
  export function FooterItem(props: CardFooterItemProps & AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement;
  export function Header(props: CardHeaderProps): ReactElement;
  export function HeaderIcon(props: CardHeaderIconProps): ReactElement;
  export function HeaderTitle(props: CardHeaderTitleProps): ReactElement;
  export function Image(props: CardImageProps): ReactElement;
}

export default Card;
