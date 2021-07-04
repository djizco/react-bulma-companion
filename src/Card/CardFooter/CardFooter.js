import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardFooter({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('card-footer', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardFooter.defaultProps = {
  className: undefined,
  children: null,
  component: 'footer',
};
