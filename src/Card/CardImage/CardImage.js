import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardImage({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('card-image', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardImage.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
