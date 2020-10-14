import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DropdownItem({
  children,
  className,
  link,
  ...props
}) {
  const Element = link ? 'a' : 'div';

  const classes = classNames('dropdown-item', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

DropdownItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.bool,
};

DropdownItem.defaultProps = {
  className: undefined,
  children: null,
  link: false,
};