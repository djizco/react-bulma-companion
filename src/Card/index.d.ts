import { ElementComponent } from '../Element';

import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardFooterItem from './CardFooterItem';
import CardHeader from './CardHeader';
import CardHeaderIcon from './CardHeaderIcon';
import CardHeaderTitle from './CardHeaderTitle';
import CardImage from './CardImage';

export interface CardProps {}

declare const Card: ElementComponent<CardProps, 'div'> & {
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  FooterItem: typeof CardFooterItem;
  Header: typeof CardHeader;
  HeaderIcon: typeof CardHeaderIcon;
  HeaderTitle: typeof CardHeaderTitle;
  Image: typeof CardImage;
};

export default Card;
