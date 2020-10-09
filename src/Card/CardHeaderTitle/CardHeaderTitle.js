import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardHeaderTitle({
  centered,
  children,
  className,
  ...props
}) {
  const classes = classNames('card-header-title', className, {
    'is-centered': centered,
  });

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}

CardHeaderTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  centered: PropTypes.bool,
};

CardHeaderTitle.defaultProps = {
  className: undefined,
  children: null,
  centered: false,
};
