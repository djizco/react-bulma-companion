import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableHead({
  children,
  className,
  ...props
}) {
  const tableHeadClasses = classNames(className);

  return (
    <thead className={tableHeadClasses} {...props}>
      {children}
    </thead>
  );
}

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableHead.defaultProps = {
  className: undefined,
  children: null,
};
