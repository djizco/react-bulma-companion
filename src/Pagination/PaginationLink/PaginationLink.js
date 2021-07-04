import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function PaginationLink({
  children,
  className,
  component,
  current,
  ...props
}) {
  const Element = component;

  const classes = classNames('pagination-link', className, {
    'is-current': current,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

PaginationLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
};

PaginationLink.defaultProps = {
  className: undefined,
  children: null,
  component: 'a',
  current: false,
  disabled: false,
};
