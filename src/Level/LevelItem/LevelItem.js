import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LevelItem({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;
  const classes = classNames('level-item', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

LevelItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

LevelItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
