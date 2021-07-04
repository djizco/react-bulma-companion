import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationEllipsis({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

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
