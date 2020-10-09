import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ImageContent from './ImageContent';

export default function Image({
  children,
  className,
  fullwidth,
  ratio,
  size,
  ...props
}) {
  // Sizes
  const sizeMap = {
    '16x16': 'is-16x16',
    '24x24': 'is-24x24',
    '32x32': 'is-32x32',
    '48x48': 'is-48x48',
    '64x64': 'is-64x64',
    '96x96': 'is-96x96',
    '128x128': 'is-128x128',
  };
  const isSize = size && sizeMap[size];

  // Ratios
  const ratioMap = {
    square: 'is-square',
    '1by1': 'is-1by1',
    '5by4': 'is-5by4',
    '4by3': 'is-4by3',
    '3by2': 'is-3by2',
    '5by3': 'is-5by3',
    '16by9': 'is-16by9',
    '2by1': 'is-2by1',
    '3by1': 'is-3by1',
    '4by5': 'is-4by5',
    '3by4': 'is-3by4',
    '2by3': 'is-2by3',
    '3by5': 'is-3by5',
    '9by16': 'is-9by16',
    '1by2': 'is-1by2',
    '1by3': 'is-1by3',
  };
  const isRatio = ratio && ratioMap[ratio];

  const classes = classNames('image', className, isSize, isRatio, {
    'is-fullwidth': fullwidth,
  });

  return (
    <figure className={classes} {...props}>
      {children}
    </figure>
  );
}

Image.Content = ImageContent;

Image.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf([
    '16x16',
    '24x24',
    '32x32',
    '48x48',
    '64x64',
    '96x96',
    '128x128',
  ]),
  ratio: PropTypes.oneOf([
    'square',
    '1by1',
    '5by4',
    '4by3',
    '3by2',
    '5by3',
    '16by9',
    '2by1',
    '3by1',
    '4by5',
    '3by4',
    '2by3',
    '3by5',
    '9by16',
    '1by2',
    '1by3',
  ]),
  fullwidth: PropTypes.bool,
};

Image.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
  ratio: undefined,
  fullwidth: false,
};
