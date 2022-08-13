import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BreadcrumbList from './BreadcrumbList';
import BreadcrumbListItem from './BreadcrumbListItem';

import Element from '../Element';

const aligns = ['center', 'right'];
const alignMap = {
  center: 'is-centered',
  right: 'is-right',
};

const separators = ['arrow', 'bullet', 'dot', 'succeeds'];
const separatorMap = {
  arrow: 'has-arrow-separator',
  bullet: 'has-bullet-separator',
  dot: 'has-dot-separator',
  succeeds: 'has-succeeds-separator',
};

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Breadcrumb({
  align,
  children,
  className,
  separator,
  size,
  ...props
}) {
  const isAlign = align && alignMap[align];
  const isSeparator = separator && separatorMap[separator];
  const isSize = size && sizeMap[size];

  const classes = classNames('breadcrumb', className, isAlign, isSeparator, isSize);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

Breadcrumb.List = BreadcrumbList;
Breadcrumb.ListItem = BreadcrumbListItem;

Breadcrumb.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  align: PropTypes.oneOf(aligns),
  separator: PropTypes.oneOf(separators),
  size: PropTypes.oneOf(sizes),
};

Breadcrumb.defaultProps = {
  className: undefined,
  children: null,
  component: 'nav',
  align: undefined,
  separator: undefined,
  size: undefined,
};
