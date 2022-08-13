import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PaginationPrevious({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-previous', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PaginationPrevious.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
};

PaginationPrevious.defaultProps = {
  className: undefined,
  children: null,
  component: 'a',
  disabled: false,
};
