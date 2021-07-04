import React from 'react';
import PropTypes from 'prop-types';

export default function TabsLink({
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

TabsLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

TabsLink.defaultProps = {
  className: undefined,
  children: null,
  component: 'a',
};
