import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabsList from './TabsList';
import TabsListItem from './TabsListItem';
import TabsLink from './TabsLink';

import Element from '../Element';

export default function Tabs({
  align,
  boxed,
  children,
  className,
  fullwidth,
  rounded,
  size,
  toggle,
  ...props
}) {
  // Sizes
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  // Align
  const alignMap = {
    center: 'is-centered',
    right: 'is-right',
  };
  const isAlign = align && alignMap[align];

  const classes = classNames('tabs', className, isSize, isAlign, {
    'is-boxed': boxed,
    'is-fullwidth': fullwidth,
    'is-toggle': toggle,
    'is-toggle-rounded': toggle && rounded,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Tabs.List = TabsList;
Tabs.ListItem = TabsListItem;
Tabs.Link = TabsLink;

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['center', 'right']),
  boxed: PropTypes.bool,
  fullwidth: PropTypes.bool,
  toggle: PropTypes.bool,
  /**
   * Use with toggle to create rounded toggle tabs
   */
  rounded: PropTypes.bool,
};

Tabs.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
  size: undefined,
  align: undefined,
  boxed: false,
  fullwidth: false,
  toggle: false,
  rounded: false,
};
