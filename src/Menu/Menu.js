import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import MenuListItem from './MenuListItem';
import MenuLink from './MenuLink';

export default function Menu({
  children,
  className,
  size,
  ...props
}) {
  // Sizes
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const menuClasses = classNames('menu', className, isSize);

  return (
    <aside className={menuClasses} {...props}>
      {children}
    </aside>
  );
}

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.ListItem = MenuListItem;
Menu.Link = MenuLink;

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Menu.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
};
