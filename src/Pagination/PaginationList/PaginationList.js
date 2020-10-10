import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationList({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-list', className);

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
}

PaginationList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PaginationList.defaultProps = {
  className: undefined,
  children: null,
};
