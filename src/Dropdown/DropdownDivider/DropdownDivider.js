import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function DropdownDivider({
  className,
  ...props
}) {
  const classes = classNames('dropdown-divider', className);

  return (
    <Element className={classes} {...props} />
  );
}

DropdownDivider.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
};

DropdownDivider.defaultProps = {
  className: undefined,
  component: 'hr',
};
