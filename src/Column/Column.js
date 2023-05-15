import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const sizes = [
  'full', 'half', 'one-third', 'two-thirds', 'one-quarter', 'three-quarters',
  'one-fifth', 'two-fifths', 'three-fifths', 'four-fifths',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
];

const sizeMap = {};
const offsetMap = {};

sizes.forEach(size => {
  sizeMap[size] = `is-${size}`;
  offsetMap[size] = `is-offset-${size}`;
});

export default function Column({
  children,
  className,
  desktop,
  fullhd,
  mobile,
  narrow,
  offset,
  size,
  tablet,
  touch,
  widescreen,
  ...props
}) {
  const isSize = size && sizeMap[size];
  const isOffset = offset && offsetMap[offset];

  const classes = classNames(
    'column',
    className,
    isSize,
    isOffset,
    {
      [`${sizeMap[mobile.size]}-mobile`]:
        !!mobile.size && sizes.includes(mobile.size),
      [`${sizeMap[tablet.size]}-tablet`]:
        !!tablet.size && sizes.includes(tablet.size),
      [`${sizeMap[touch.size]}-touch`]:
        !!touch.size && sizes.includes(touch.size),
      [`${sizeMap[desktop.size]}-desktop`]:
        !!desktop.size && sizes.includes(desktop.size),
      [`${sizeMap[widescreen.size]}-widescreen`]:
        !!widescreen.size && sizes.includes(widescreen.size),
      [`${sizeMap[fullhd.size]}-fullhd`]:
        !!fullhd.size && sizes.includes(fullhd.size),

      [`${offsetMap[mobile.offset]}-mobile`]:
        !!mobile.offset && sizes.includes(mobile.offset),
      [`${offsetMap[tablet.offset]}-tablet`]:
        !!tablet.offset && sizes.includes(tablet.offset),
      [`${offsetMap[touch.offset]}-touch`]:
        !!touch.offset && sizes.includes(touch.offset),
      [`${offsetMap[desktop.offset]}-desktop`]:
        !!desktop.offset && sizes.includes(desktop.offset),
      [`${offsetMap[widescreen.offset]}-widescreen`]:
        !!widescreen.offset && sizes.includes(widescreen.offset),
      [`${offsetMap[fullhd.offset]}-fullhd`]:
        !!fullhd.offset && sizes.includes(fullhd.offset),

      'is-narrow': narrow,
      'is-narrow-mobile': mobile.narrow,
      'is-narrow-tablet': tablet.narrow,
      'is-narrow-touch': touch.narrow,
      'is-narrow-desktop': desktop.narrow,
      'is-narrow-widescreen': widescreen.narrow,
      'is-narrow-fullhd': fullhd.narrow,
    },
  );

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
  offset: PropTypes.oneOf(sizes),
  narrow: PropTypes.bool,
  mobile: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  tablet: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  touch: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  desktop: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  widescreen: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  fullhd: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
};

Column.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
  offset: undefined,
  narrow: false,
  mobile: {},
  tablet: {},
  touch: {},
  desktop: {},
  widescreen: {},
  fullhd: {},
};
