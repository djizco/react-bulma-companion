import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BreadcrumbList from './BreadcrumbList';
import BreadcrumbListItem from './BreadcrumbListItem';

export default function Breadcrumb({
  align,
  children,
  className,
  separator,
  size,
  ...props
}) {
  // Align
  const alignMap = {
    center: 'is-centered',
    right: 'is-right',
  };
  const isAlign = align && alignMap[align];

  // Separators
  const separatorMap = {
    arrow: 'has-arrow-separator',
    bullet: 'has-bullet-separator',
    dot: 'has-dot-separator',
    succeeds: 'has-succeeds-separator',
  };
  const isSeparator = separator && separatorMap[separator];

  // Size
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const breadcrumbClasses = classNames('breadcrumb', className, isAlign, isSeparator, isSize);

  return (
    <nav className={breadcrumbClasses} {...props}>
      {children}
    </nav>
  );
}

Breadcrumb.List = BreadcrumbList;
Breadcrumb.ListItem = BreadcrumbListItem;

Breadcrumb.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  align: PropTypes.oneOf(['center', 'right']),
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Breadcrumb.defaultProps = {
  className: undefined,
  children: null,
  align: undefined,
  separator: undefined,
  size: undefined,
};
