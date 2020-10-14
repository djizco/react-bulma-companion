import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function CardHeader({
  children,
  className,
  ...props
}) {
  const classes = classNames('card-header', className);

  return (
    <header className={classes} {...props}>
      {children}
    </header>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardHeader.defaultProps = {
  className: undefined,
  children: null,
};