import React from 'react';
import PropTypes from 'prop-types';

export default function TableFoot({
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

TableFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

TableFoot.defaultProps = {
  className: undefined,
  children: null,
  component: 'tfoot',
};
