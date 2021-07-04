import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function BreadcrumbListItem({
  active,
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames(className, {
    'is-active': active,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

BreadcrumbListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  active: PropTypes.bool,
};

BreadcrumbListItem.defaultProps = {
  className: undefined,
  children: null,
  component: 'li',
  active: false,
};
