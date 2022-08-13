import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function TableBody({
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

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

TableBody.defaultProps = {
  className: undefined,
  children: null,
  component: 'tbody',
};
