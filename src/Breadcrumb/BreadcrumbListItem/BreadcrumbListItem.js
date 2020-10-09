import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function BreadcrumbListItem({
  active,
  children,
  className,
  ...props
}) {
  const classes = classNames(className, {
    'is-active': active,
  });

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  );
}

BreadcrumbListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

BreadcrumbListItem.defaultProps = {
  className: undefined,
  children: null,
  active: false,
};
