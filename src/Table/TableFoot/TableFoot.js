import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function TableFoot({
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
