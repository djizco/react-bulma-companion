import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FileLabel from './FileLabel';
import FileInput from './FileInput';
import FileCTA from './FileCTA';
import FileIcon from './FileIcon';
import FileText from './FileText';
import FileName from './FileName';

import Element from '../Element';

const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark',
];
const colorMap = {
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  white: 'is-white',
  black: 'is-black',
  light: 'is-light',
  dark: 'is-dark',
};

const sizes = ['small', 'normal', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

const aligns = ['center', 'right'];
const alignMap = {
  center: 'is-centered',
  right: 'is-right',
};

export default function File({
  align,
  boxed,
  children,
  className,
  color,
  fullwidth,
  hasName,
  size,
  ...props
}) {
  const isColor = color && colorMap[color];
  const isSize = size && sizeMap[size];
  const isAlign = align && alignMap[align];

  const classes = classNames('file', className, isColor, isSize, isAlign, {
    'has-name': hasName,
    'is-fullwidth': fullwidth,
    'is-boxed': boxed,
  });

  return (
    <Element type="file" className={classes} {...props}>
      {children}
    </Element>
  );
}

File.Label = FileLabel;
File.Input = FileInput;
File.CTA = FileCTA;
File.Icon = FileIcon;
File.Text = FileText;
File.Name = FileName;

File.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
  align: PropTypes.oneOf(aligns),
  hasName: PropTypes.bool,
  boxed: PropTypes.bool,
  fullwidth: PropTypes.bool,
};

File.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  color: undefined,
  size: undefined,
  align: undefined,
  hasName: false,
  boxed: false,
  fullwidth: false,
};
