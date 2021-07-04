import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardHeader({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('card-header', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardHeader.defaultProps = {
  className: undefined,
  children: null,
  component: 'header',
};
