import React, { ReactNode, ReactElement, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import { ElementProps, MainColor } from '../Element';

import { FileCTAProps } from './FileCTA';
import { FileIconProps } from './FileIcon';
import { FileInputProps } from './FileInput';
import { FileLabelProps } from './FileLabel';
import { FileNameProps } from './FileName';
import { FileTextProps } from './FileText';

export interface FileProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  color?: MainColor;
  size?: 'small' | 'normal' | 'medium' | 'large';
  align?: 'center' | 'right';
  hasName?: boolean;
  boxed?: boolean;
  fullwidth?: boolean;
}

declare function File(props: FileProps): ReactElement;

declare namespace File {
  export function CTA(props: FileCTAProps): ReactElement;
  export function Icon(props: FileIconProps): ReactElement;
  export function Input(props: FileInputProps & InputHTMLAttributes<HTMLInputElement>): ReactElement;
  export function Label(props: FileLabelProps & LabelHTMLAttributes<HTMLLabelElement>): ReactElement;
  export function Name(props: FileNameProps): ReactElement;
  export function Text(props: FileTextProps): ReactElement;
}

export default File;
