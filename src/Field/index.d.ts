import React, { ReactNode, ReactElement } from 'react';

import { ElementProps } from '../Element';

import { FieldBodyProps } from './FieldBody';
import { FieldLabelProps } from './FieldLabel';

export interface FieldProps extends ElementProps {
  className?: string;
  children?: ReactNode;
  component?: React.ElementType;
  grouped?: boolean;
  addons?: boolean;
  align?: 'center' | 'right';
  multiline?: boolean;
  fullwidth?: boolean;
  horizontal?: boolean;
  expanded?: boolean;
  narrow?: boolean;
}

declare function Field(props: FieldProps): ReactElement;

declare namespace Field {
  export function Body(props: FieldBodyProps): ReactElement;
  export function Label(props: FieldLabelProps): ReactElement;
}

export default Field;
