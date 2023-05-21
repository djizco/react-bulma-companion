import { ElementComponent } from '../Element';
import { MainColor } from '../types';

import PanelBlock from './PanelBlock';
import PanelHeading from './PanelHeading';
import PanelIcon from './PanelIcon';
import PanelTab from './PanelTab';
import PanelTabs from './PanelTabs';

export type PanelColor = MainColor;

export interface PanelProps {
  color?: PanelColor;
}

declare const Panel: ElementComponent<PanelProps, 'nav'> & {
  Block: typeof PanelBlock;
  Heading: typeof PanelHeading;
  Icon: typeof PanelIcon;
  Tab: typeof PanelTab;
  Tabs: typeof PanelTabs;
};

export default Panel;
