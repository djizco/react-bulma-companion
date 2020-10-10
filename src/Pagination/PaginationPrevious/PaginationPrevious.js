import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationPrevious({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-previous', className);

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

PaginationPrevious.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

PaginationPrevious.defaultProps = {
  className: undefined,
  children: null,
  disabled: false,
};
