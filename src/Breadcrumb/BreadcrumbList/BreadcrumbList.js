import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function BreadcrumbList({
  children,
  className,
  ...props
}) {
  const classes = classNames(className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

BreadcrumbList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

BreadcrumbList.defaultProps = {
  className: undefined,
  children: null,
  component: 'ul',
};
