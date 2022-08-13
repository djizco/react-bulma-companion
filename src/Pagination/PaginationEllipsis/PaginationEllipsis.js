import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PaginationEllipsis({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-ellipsis', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PaginationEllipsis.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PaginationEllipsis.defaultProps = {
  className: undefined,
  children: null,
  component: 'span',
};
