import { ElementWithoutResponsiveComponent } from '../Element';

import LevelItem from './LevelItem';
import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';

export interface LevelProps {
  mobile?: boolean;
}

declare const Level: ElementWithoutResponsiveComponent<LevelProps, 'nav'> & {
  Item: typeof LevelItem;
  Left: typeof LevelLeft;
  Right: typeof LevelRight;
};

export default Level;
