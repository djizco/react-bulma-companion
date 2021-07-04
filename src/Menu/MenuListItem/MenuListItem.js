import React from 'react';
import PropTypes from 'prop-types';

export default function MenuListItem({
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

MenuListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MenuListItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'li',
};
