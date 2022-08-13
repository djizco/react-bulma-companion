import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import MenuListItem from './MenuListItem';
import MenuLink from './MenuLink';

import Element from '../Element';

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Menu({
  children,
  className,
  size,
  ...props
}) {
  const isSize = size && sizeMap[size];

  const classes = classNames('menu', className, isSize);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.ListItem = MenuListItem;
Menu.Link = MenuLink;

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
};

Menu.defaultProps = {
  className: undefined,
  children: null,
  component: 'aside',
  size: undefined,
};
