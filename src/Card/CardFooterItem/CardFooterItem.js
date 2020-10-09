import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardFooterItem({
  children,
  className,
  link,
  ...props
}) {
  const Element = link ? 'a' : 'div';
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
  link: PropTypes.bool,
};

CardFooterItem.defaultProps = {
  className: undefined,
  children: null,
  link: false,
};
