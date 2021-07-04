import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationList({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

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
