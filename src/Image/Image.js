import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ImageContent from './ImageContent';

import Element from '../Element';

const sizes = ['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128'];
const sizeMap = {};
sizes.forEach(size => {
  sizeMap[size] = `is-${size}`;
});

const ratios = [
  'square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', '2by1', '3by1',
  '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3',
];
const ratioMap = {};
ratios.forEach(ratio => {
  ratioMap[ratio] = `is-${ratio}`;
});

export default function Image({
  children,
  className,
  fullwidth,
  ratio,
  size,
  ...props
}) {
  const isSize = size && sizeMap[size];
  const isRatio = ratio && ratioMap[ratio];

  const classes = classNames('image', className, isSize, isRatio, {
    'is-fullwidth': fullwidth,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Image.Content = ImageContent;

Image.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
  ratio: PropTypes.oneOf(ratios),
  fullwidth: PropTypes.bool,
};

Image.defaultProps = {
  className: undefined,
  children: null,
  component: 'figure',
  size: undefined,
  ratio: undefined,
  fullwidth: false,
};
