import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationEllipsis({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-ellipsis', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

PaginationEllipsis.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PaginationEllipsis.defaultProps = {
  className: undefined,
  children: null,
};
