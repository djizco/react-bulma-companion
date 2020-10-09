import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardFooter({
  children,
  className,
  ...props
}) {
  const cardFooterClasses = classNames('card-footer', className);

  return (
    <footer className={cardFooterClasses} {...props}>
      {children}
    </footer>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardFooter.defaultProps = {
  className: undefined,
  children: null,
};
