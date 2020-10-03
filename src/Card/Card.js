import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Card({
  children,
  className,
  ...props
}) {
  const cardClasses = classNames('card', className);

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  className: undefined,
  children: null,
};
