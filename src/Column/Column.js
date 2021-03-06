import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const sizes = [
  'full', 'half', 'one-third', 'two-thirds', 'one-quarter', 'three-quarters',
  'one-fifth', 'two-fifths', 'three-fifths', 'four-fifths',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
];

const sizeMap = {};
const offsetMap = {};
const mobileSizeMap = {};
const mobileOffsetMap = {};
const tabletSizeMap = {};
const tabletOffsetMap = {};
const touchSizeMap = {};
const touchOffsetMap = {};
const desktopSizeMap = {};
const desktopOffsetMap = {};
const widescreenSizeMap = {};
const widescreenOffsetMap = {};
const fullhdSizeMap = {};
const fullhdOffsetMap = {};

sizes.forEach(size => {
  sizeMap[size] = `is-${size}`;
  offsetMap[size] = `is-offset-${size}`;
  mobileSizeMap[size] = `is-${size}-mobile`;
  mobileOffsetMap[size] = `is-offset-${size}-mobile`;
  tabletSizeMap[size] = `is-${size}-tablet`;
  tabletOffsetMap[size] = `is-offset-${size}-tablet`;
  touchSizeMap[size] = `is-${size}-touch`;
  touchOffsetMap[size] = `is-offset-${size}-touch`;
  desktopSizeMap[size] = `is-${size}-desktop`;
  desktopOffsetMap[size] = `is-offset-${size}-desktop`;
  widescreenSizeMap[size] = `is-${size}-widescreen`;
  widescreenOffsetMap[size] = `is-offset-${size}-widescreen`;
  fullhdSizeMap[size] = `is-${size}-fullhd`;
  fullhdOffsetMap[size] = `is-offset-${size}-fullhd`;
});

export default function Column({
  children,
  className,
  component,
  desktopOffset,
  desktopSize,
  fullhdOffset,
  fullhdSize,
  mobileOffset,
  mobileSize,
  narrow,
  narrowMobile,
  narrowTablet,
  narrowTouch,
  narrowDesktop,
  narrowWidescreen,
  narrowFullhd,
  offset,
  size,
  tabletOffset,
  tabletSize,
  touchOffset,
  touchSize,
  widescreenOffset,
  widescreenSize,
  ...props
}) {
  const Element = component;

  const isSize = size && sizeMap[size];
  const isOffset = offset && offsetMap[offset];
  const isMobileSize = mobileSize && mobileSizeMap[mobileSize];
  const isMobileOffset = mobileOffset && mobileOffsetMap[mobileOffset];
  const isTabletSize = tabletSize && tabletSizeMap[tabletSize];
  const isTabletOffset = tabletOffset && tabletOffsetMap[tabletOffset];
  const isTouchSize = touchSize && touchSizeMap[touchSize];
  const isTouchOffset = touchOffset && touchOffsetMap[touchOffset];
  const isDesktopSize = desktopSize && desktopSizeMap[desktopSize];
  const isDesktopOffset = desktopOffset && desktopOffsetMap[desktopOffset];
  const isWidescreenSize = widescreenSize && widescreenSizeMap[widescreenSize];
  const isWidescreenOffset = widescreenOffset && widescreenOffsetMap[widescreenOffset];
  const isFullhdSize = fullhdSize && fullhdSizeMap[fullhdSize];
  const isFullhdOffset = fullhdOffset && fullhdOffsetMap[fullhdOffset];

  const classes = classNames(
    'column',
    className,
    isSize,
    isOffset,
    isMobileSize,
    isMobileOffset,
    isTabletSize,
    isTabletOffset,
    isTouchSize,
    isTouchOffset,
    isDesktopSize,
    isDesktopOffset,
    isWidescreenSize,
    isWidescreenOffset,
    isFullhdSize,
    isFullhdOffset,
    {
      'is-narrow': narrow,
      'is-narrow-mobile': narrowMobile,
      'is-narrow-tablet': narrowTablet,
      'is-narrow-touch': narrowTouch,
      'is-narrow-desktop': narrowDesktop,
      'is-narrow-widescreen': narrowWidescreen,
      'is-narrow-fullhd': narrowFullhd,
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
  mobileSize: PropTypes.oneOf(sizes),
  mobileOffset: PropTypes.oneOf(sizes),
  tabletSize: PropTypes.oneOf(sizes),
  tabletOffset: PropTypes.oneOf(sizes),
  touchSize: PropTypes.oneOf(sizes),
  touchOffset: PropTypes.oneOf(sizes),
  desktopSize: PropTypes.oneOf(sizes),
  desktopOffset: PropTypes.oneOf(sizes),
  widescreenSize: PropTypes.oneOf(sizes),
  widescreenOffset: PropTypes.oneOf(sizes),
  fullhdSize: PropTypes.oneOf(sizes),
  fullhdOffset: PropTypes.oneOf(sizes),
  narrow: PropTypes.bool,
  narrowMobile: PropTypes.bool,
  narrowTablet: PropTypes.bool,
  narrowTouch: PropTypes.bool,
  narrowDesktop: PropTypes.bool,
  narrowWidescreen: PropTypes.bool,
  narrowFullhd: PropTypes.bool,
};

Column.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
  offset: undefined,
  mobileSize: undefined,
  mobileOffset: undefined,
  tabletSize: undefined,
  tabletOffset: undefined,
  touchSize: undefined,
  touchOffset: undefined,
  desktopSize: undefined,
  desktopOffset: undefined,
  widescreenSize: undefined,
  widescreenOffset: undefined,
  fullhdSize: undefined,
  fullhdOffset: undefined,
  narrow: false,
  narrowMobile: false,
  narrowTablet: false,
  narrowTouch: false,
  narrowDesktop: false,
  narrowWidescreen: false,
  narrowFullhd: false,
};
