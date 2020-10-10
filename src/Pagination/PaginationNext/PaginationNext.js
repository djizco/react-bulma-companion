import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationNext({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-next', className);

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

PaginationNext.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

PaginationNext.defaultProps = {
  className: undefined,
  children: null,
  disabled: false,
};
