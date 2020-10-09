import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DropdownContent from './DropdownContent';
import DropdownDivider from './DropdownDivider';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';

export default function Dropdown({
  active,
  children,
  className,
  hoverable,
  right,
  up,
  ...props
}) {
  const classes = classNames('dropdown', className, {
    'is-active': active,
    'is-hoverable': hoverable,
    'is-right': right,
    'is-up': up,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Dropdown.Content = DropdownContent;
Dropdown.Divider = DropdownDivider;
Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Trigger = DropdownTrigger;

Dropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  hoverable: PropTypes.bool,
  right: PropTypes.bool,
  up: PropTypes.bool,
};

Dropdown.defaultProps = {
  className: undefined,
  children: null,
  active: false,
  hoverable: false,
  right: false,
  up: false,
};
