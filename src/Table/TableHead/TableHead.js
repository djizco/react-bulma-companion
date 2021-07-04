import React from 'react';
import PropTypes from 'prop-types';

export default function TableHead({
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

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

TableHead.defaultProps = {
  className: undefined,
  children: null,
  component: 'thead',
};
