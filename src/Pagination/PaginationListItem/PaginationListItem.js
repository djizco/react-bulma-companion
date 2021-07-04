import React from 'react';
import PropTypes from 'prop-types';

export default function PaginationListItem({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
}

PaginationListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

PaginationListItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'li',
};
