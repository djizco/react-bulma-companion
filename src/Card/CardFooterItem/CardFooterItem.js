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
  const cardFooterItemClasses = classNames('card-footer-item', className);

  return (
    <Element className={cardFooterItemClasses} {...props}>
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
