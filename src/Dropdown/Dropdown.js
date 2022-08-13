import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DropdownContent from './DropdownContent';
import DropdownDivider from './DropdownDivider';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';

import Element from '../Element';

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
    <Element className={classes} {...props}>
      {children}
    </Element>
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
  component: PropTypes.elementType,
  active: PropTypes.bool,
  hoverable: PropTypes.bool,
  right: PropTypes.bool,
  up: PropTypes.bool,
};

Dropdown.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  active: false,
  hoverable: false,
  right: false,
  up: false,
};
