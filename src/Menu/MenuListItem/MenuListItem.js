import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function MenuListItem({
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
