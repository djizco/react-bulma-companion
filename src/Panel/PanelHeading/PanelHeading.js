import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelHeading({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('panel-heading', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PanelHeading.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
