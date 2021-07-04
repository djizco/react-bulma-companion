import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationPrevious({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

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
