import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Container({
  breakpoint,
  children,
  className,
  fluid,
  ...props
}) {
  const breakpointMap = {
    widescreen: 'is-widescreen',
    fullhd: 'is-fullhd',
    'max-desktop': 'is-max-desktop',
    'max-widescreen': 'is-max-widescreen',
  };

  const isBreakpoint = breakpoint && breakpointMap[breakpoint];

  const containerClasses = classNames('container', className, isBreakpoint, {
    'is-fluid': fluid,
  });

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
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
  breakpoint: undefined,
  fluid: false,
};
