import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FileLabel from './FileLabel';
import FileInput from './FileInput';
import FileCTA from './FileCTA';
import FileIcon from './FileIcon';
import FileText from './FileText';
import FileName from './FileName';

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
  // Colors
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
  const isColor = color && colorMap[color];

  // Sizes
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  // Align
  const alignMap = {
    center: 'is-centered',
    right: 'is-right',
  };
  const isAlign = align && alignMap[align];

  const classes = classNames('file', className, isColor, isSize, isAlign, {
    'has-name': hasName,
    'is-fullwidth': fullwidth,
    'is-boxed': boxed,
  });

  return (
    <div type="file" className={classes} {...props}>
      {children}
    </div>
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
  color: PropTypes.oneOf([
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
    'white',
    'black',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['center', 'right']),
  hasName: PropTypes.bool,
  boxed: PropTypes.bool,
  fullwidth: PropTypes.bool,
};

File.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  size: undefined,
  align: undefined,
  hasName: false,
  boxed: false,
  fullwidth: false,
};
