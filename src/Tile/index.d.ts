import { ElementComponent } from '../Element';
import { MainColor } from '../types';

export type TileType = 'ancestor' | 'parent' | 'child';
export type TileSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface TileProps {
  type?: TileType;
  size?: TileSize;
  color?: MainColor;
  light?: boolean;
  vertical?: boolean;
  box?: boolean;
}

declare const Tile: ElementComponent<TileProps, 'div'>;

export default Tile;
