import { ElementComponent } from '../Element';
import { MainColor, Size } from '../types';

import FileCTA from './FileCTA';
import FileIcon from './FileIcon';
import FileInput from './FileInput';
import FileLabel from './FileLabel';
import FileName from './FileName';
import FileText from './FileText';

export type FileColor = MainColor;
export type FileSize = Size;
export type FileAlign = 'center' | 'right';

export interface FileProps {
  color?: FileColor;
  size?: FileSize;
  align?: FileAlign;
  hasName?: boolean;
  boxed?: boolean;
  fullwidth?: boolean;
}

declare const File: ElementComponent<FileProps, 'div'> & {
  CTA: typeof FileCTA;
  Icon: typeof FileIcon;
  Input: typeof FileInput;
  Label: typeof FileLabel;
  Name: typeof FileName;
  Text: typeof FileText;
};

export default File;
