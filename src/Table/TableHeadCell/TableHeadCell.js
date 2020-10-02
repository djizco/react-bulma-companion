import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableHeadCell({
  children,
  className,
  ...props
}) {
  const tableHeadCellClasses = classNames(className);

  return (
    <th className={tableHeadCellClasses} {...props}>
      {children}
    </th>
  );
}

TableHeadCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableHeadCell.defaultProps = {
  className: undefined,
  children: null,
};
