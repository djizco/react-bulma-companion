import { ElementWithoutChildrenComponent } from '../../Element';

export interface ImageContentProps {
  rounded?: boolean;
}

declare const ImageContent: ElementWithoutChildrenComponent<ImageContentProps, 'img'>;

export default ImageContent;
