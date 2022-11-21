import React from 'react';
import PropTypes from 'prop-types';

import Element from '../../Element';

export default function SelectOption({
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

SelectOption.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  /**
  * Deprecated. Use 'defaultValue' or 'value' prop on SelectContent.
  */
  selected: PropTypes.bool,
};

SelectOption.defaultProps = {
  className: undefined,
  children: null,
  component: 'option',
  selected: undefined,
};
