import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationNext({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

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
