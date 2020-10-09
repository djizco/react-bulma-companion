import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardImage({
  children,
  className,
  ...props
}) {
  const cardImageClasses = classNames('card-image', className);

  return (
    <div className={cardImageClasses} {...props}>
      {children}
    </div>
  );
}

CardImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardImage.defaultProps = {
  className: undefined,
  children: null,
};
