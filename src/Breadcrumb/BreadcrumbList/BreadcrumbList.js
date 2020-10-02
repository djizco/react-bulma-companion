import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function BreadcrumbList({
  children,
  className,
  ...props
}) {
  const breadcrumbListClasses = classNames(className);

  return (
    <ul className={breadcrumbListClasses} {...props}>
      {children}
    </ul>
  );
}

BreadcrumbList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

BreadcrumbList.defaultProps = {
  className: undefined,
  children: null,
};
