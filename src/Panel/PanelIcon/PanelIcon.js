import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PanelIcon({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('panel-icon', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PanelIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PanelIcon.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
