import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownDivider({
  className,
  component,
  ...props
}) {
  const Element = component;

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
