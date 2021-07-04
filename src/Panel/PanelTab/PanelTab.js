import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelTab({
  active,
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames(className, {
    'is-active': active,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelTab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  active: PropTypes.bool,
};

PanelTab.defaultProps = {
  className: undefined,
  children: null,
  component: 'a',
  active: false,
};
