import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableDataCell({
  children,
  className,
  ...props
}) {
  const tableDataCellClasses = classNames(className);

  return (
    <td className={tableDataCellClasses} {...props}>
      {children}
    </td>
  );
}

TableDataCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableDataCell.defaultProps = {
  className: undefined,
  children: null,
};
