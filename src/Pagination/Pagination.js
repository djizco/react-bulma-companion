import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PaginationEllipsis from './PaginationEllipsis';
import PaginationLink from './PaginationLink';
import PaginationList from './PaginationList';
import PaginationListItem from './PaginationListItem';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export default function Pagination({
  align,
  children,
  className,
  rounded,
  size,
  ...props
}) {
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const alignMap = {
    center: 'is-centered',
    right: 'is-right',
  };
  const isAlign = align && alignMap[align];

  const classes = classNames('pagination', className, isSize, isAlign, {
    'is-rounded': rounded,
  });

  return (
    <nav role="navigation" className={classes} {...props}>
      {children}
    </nav>
  );
}

Pagination.Ellipsis = PaginationEllipsis;
Pagination.Link = PaginationLink;
Pagination.List = PaginationList;
Pagination.ListItem = PaginationListItem;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;

Pagination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['center', 'right']),
  rounded: PropTypes.bool,
};

Pagination.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
  align: undefined,
  rounded: false,
};
