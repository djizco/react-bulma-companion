import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function SelectContent({
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

SelectContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  selected: PropTypes.bool,
};

SelectContent.defaultProps = {
  className: undefined,
  children: null,
  component: 'option',
  selected: false,
};
