import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function TabsList({
  children,
  className,
  ...props
}) {
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
