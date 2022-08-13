import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function TableHead({
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
