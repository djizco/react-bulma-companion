import React from 'react';
import PropTypes from 'prop-types';

export default function TabsList({
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

TabsList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

TabsList.defaultProps = {
  className: undefined,
  children: null,
  component: 'ul',
};
