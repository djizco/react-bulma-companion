import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Container({
  breakpoint,
  children,
  className,
  component,
  fluid,
  ...props
}) {
  const Element = component;

  const breakpointMap = {
    widescreen: 'is-widescreen',
    fullhd: 'is-fullhd',
    'max-desktop': 'is-max-desktop',
    'max-widescreen': 'is-max-widescreen',
  };

  const isBreakpoint = breakpoint && breakpointMap[breakpoint];

  const classes = classNames('container', className, isBreakpoint, {
    'is-fluid': fluid,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  breakpoint: PropTypes.oneOf([
    'widescreen',
    'fullhd',
    'max-desktop',
    'max-widescreen',
  ]),
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  breakpoint: undefined,
  fluid: false,
};
