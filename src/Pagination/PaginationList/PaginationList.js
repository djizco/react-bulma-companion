import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PaginationList({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-list', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PaginationList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PaginationList.defaultProps = {
  className: undefined,
  children: null,
  component: 'ul',
};
