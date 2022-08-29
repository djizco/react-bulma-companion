import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const gaps = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

const gapMap = {};

gaps.forEach(gap => {
  gapMap[gap] = `is-${gap}`;
});

export default function Columns({
  activate,
  centered,
  children,
  className,
  desktop,
  gap,
  gapless,
  multiline,
  mobile,
  vcentered,
  tablet,
  touch,
  widescreen,
  fullhd,
  ...props
}) {
  const isGap = gap && gapMap[gap];

  const classes = classNames(
    'columns',
    className,
    isGap,
    {
      [`${gapMap[mobile.gap]}-mobile`]:
        !!mobile.gap && gaps.includes(mobile.gap),
      [`${gapMap[tablet.gap]}-tablet`]:
        !!tablet.gap && !tablet.only && gaps.includes(tablet.gap),
      [`${gapMap[tablet.gap]}-tablet-only`]:
        !!tablet.gap && tablet.only && gaps.includes(tablet.gap),
      [`${gapMap[touch.gap]}-touch`]:
        !!touch.gap && gaps.includes(touch.gap),
      [`${gapMap[desktop.gap]}-desktop`]:
        !!desktop.gap && !desktop.only && gaps.includes(desktop.gap),
      [`${gapMap[desktop.gap]}-desktop-only`]:
        !!desktop.gap && desktop.only && gaps.includes(desktop.gap),
      [`${gapMap[widescreen.gap]}-widescreen`]:
        !!widescreen.gap && !widescreen.only && gaps.includes(widescreen.gap),
      [`${gapMap[widescreen.gap]}-widescreen-only`]:
        !!widescreen.gap && widescreen.only && gaps.includes(widescreen.gap),
      [`${gapMap[fullhd.gap]}-fullhd`]:
        !!fullhd.gap && gaps.includes(fullhd.gap),

      'is-mobile': activate === 'mobile',
      'is-desktop': activate === 'desktop',
      'is-centered': centered,
      'is-vcentered': vcentered,
      'is-gapless': gapless,
      'is-multiline': multiline,
      'is-variable': !!gap || !!mobile.gap || !!tablet.gap || !!touch.gap
        || !!desktop.gap || !!widescreen.gap || !!fullhd.gap,
    },
  );

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Columns.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  gap: PropTypes.oneOf(gaps),
  mobile: PropTypes.shape({
    gap: PropTypes.oneOf(gaps),
  }),
  tablet: PropTypes.shape({
    gap: PropTypes.oneOf(gaps),
    only: PropTypes.bool,
  }),
  touch: PropTypes.shape({
    gap: PropTypes.oneOf(gaps),
  }),
  desktop: PropTypes.shape({
    gap: PropTypes.oneOf(gaps),
    only: PropTypes.bool,
  }),
  widescreen: PropTypes.shape({
    gap: PropTypes.oneOf(gaps),
    only: PropTypes.bool,
  }),
  fullhd: PropTypes.shape({
    gap: PropTypes.oneOf(gaps),
  }),
  activate: PropTypes.oneOf(['mobile', 'tablet', 'desktop']),
  centered: PropTypes.bool,
  vcentered: PropTypes.bool,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
};

Columns.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  gap: undefined,
  mobile: {},
  tablet: {},
  touch: {},
  desktop: {},
  widescreen: {},
  fullhd: {},
  activate: 'tablet',
  centered: false,
  vcentered: false,
  gapless: false,
  multiline: false,
};
