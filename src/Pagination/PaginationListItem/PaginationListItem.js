import React from 'react';
import PropTypes from 'prop-types';

export default function PaginationListItem({
  children,
  className,
  ...props
}) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}

PaginationListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PaginationListItem.defaultProps = {
  className: undefined,
  children: null,
};
