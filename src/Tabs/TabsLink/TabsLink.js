import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function TabsLink({
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
