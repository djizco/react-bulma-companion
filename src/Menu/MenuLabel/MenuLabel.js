import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MenuLabel({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('menu-label', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MenuLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MenuLabel.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
