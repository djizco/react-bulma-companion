import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LevelRight({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('level-right', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

LevelRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

LevelRight.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
