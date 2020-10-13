import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const gaps = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

const gapMap = {};
const mobileGapMap = {};
const tabletGapMap = {};
const desktopGapMap = {};
const widescreenGapMap = {};
const fullhdGapMap = {};
const tabletOnlyGapMap = {};
const desktopOnlyGapMap = {};
const widescreenOnlyGapMap = {};

gaps.forEach(gap => {
  gapMap[gap] = `is-${gap}`;
  mobileGapMap[gap] = `is-${gap}-mobile`;
  tabletGapMap[gap] = `is-${gap}-tablet`;
  desktopGapMap[gap] = `is-${gap}-desktop`;
  widescreenGapMap[gap] = `is-${gap}-widescreen`;
  fullhdGapMap[gap] = `is-${gap}-fullhd`;
  tabletOnlyGapMap[gap] = `is-${gap}-tablet-only`;
  desktopOnlyGapMap[gap] = `is-${gap}-desktop-only`;
  widescreenOnlyGapMap[gap] = `is-${gap}-widescreen-only`;
});

export default function Columns({
  centered,
  children,
  className,
  mobile,
  mobileGap,
  desktop,
  desktopGap,
  desktopOnlyGap,
  fullhdGap,
  gap,
  gapless,
  multiline,
  tabletGap,
  tabletOnlyGap,
  vcentered,
  widescreenGap,
  widescreenOnlyGap,
  ...props
}) {
  const isGap = gap && gapMap[gap];
  const isMobileGap = mobileGap && mobileGapMap[mobileGap];
  const isTabletGap = tabletGap && tabletGapMap[tabletGap];
  const isDesktopGap = desktopGap && desktopGapMap[desktopGap];
  const isWidescreenGap = widescreenGap && widescreenGapMap[widescreenGap];
  const isFullhdGap = fullhdGap && fullhdGapMap[fullhdGap];

  const classes = classNames(
    'columns',
    className,
    isGap,
    isMobileGap,
    isTabletGap,
    isDesktopGap,
    isWidescreenGap,
    isFullhdGap,
    {
      'is-mobile': mobile,
      'is-desktop': desktop,
      'is-centered': centered,
      'is-vcentered': vcentered,
      'is-gapless': gapless,
      'is-multiline': multiline,
      'is-variable': !!gap,
    },
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Columns.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  gap: PropTypes.oneOf(gaps),
  mobileGap: PropTypes.oneOf(gaps),
  tabletGap: PropTypes.oneOf(gaps),
  desktopGap: PropTypes.oneOf(gaps),
  widescreenGap: PropTypes.oneOf(gaps),
  fullhdGap: PropTypes.oneOf(gaps),
  tabletOnlyGap: PropTypes.oneOf(gaps),
  desktopOnlyGap: PropTypes.oneOf(gaps),
  widescreenOnlyGap: PropTypes.oneOf(gaps),
  mobile: PropTypes.bool,
  desktop: PropTypes.bool,
  centered: PropTypes.bool,
  vcentered: PropTypes.bool,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
};

Columns.defaultProps = {
  className: undefined,
  children: null,
  gap: undefined,
  mobileGap: undefined,
  tabletGap: undefined,
  desktopGap: undefined,
  widescreenGap: undefined,
  fullhdGap: undefined,
  tabletOnlyGap: undefined,
  desktopOnlyGap: undefined,
  widescreenOnlyGap: undefined,
  mobile: false,
  desktop: false,
  centered: false,
  vcentered: false,
  gapless: false,
  multiline: false,
};
