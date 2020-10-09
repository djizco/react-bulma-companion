import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardImage({
  children,
  className,
  ...props
}) {
  const classes = classNames('card-image', className);

  return (
    <div className={classes} {...props}>
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
