import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Box({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('box', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

Box.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
