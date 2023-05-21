import { ElementWithoutChildrenComponent } from '../Element';

export type DeleteSize = 'small' | 'medium' | 'large';

export interface DeleteProps {
  size?: DeleteSize
}

declare const Delete: ElementWithoutChildrenComponent<DeleteProps, 'button'>;

export default Delete;
