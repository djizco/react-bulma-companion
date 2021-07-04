import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelTabs({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('panel-tabs', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelTabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PanelTabs.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
