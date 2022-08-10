import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardFooterItem({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('card-footer-item', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

CardFooterItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

CardFooterItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
