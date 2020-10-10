import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationLink({
  children,
  className,
  current,
  ...props
}) {
  const classes = classNames('pagination-link', className, {
    'is-current': current,
  });

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

PaginationLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
};

PaginationLink.defaultProps = {
  className: undefined,
  children: null,
  current: false,
  disabled: false,
};
