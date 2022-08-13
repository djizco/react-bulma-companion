import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function PaginationNext({
  children,
  className,
  ...props
}) {
  const classes = classNames('pagination-next', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PaginationNext.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
};

PaginationNext.defaultProps = {
  className: undefined,
  children: null,
  component: 'a',
  disabled: false,
};
