import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Block({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('checkbox', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
};

Block.defaultProps = {
  className: undefined,
  children: null,
  component: 'label',
  disabled: false,
};
