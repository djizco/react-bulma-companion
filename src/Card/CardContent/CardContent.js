import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardContent({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('card-content', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardContent.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
