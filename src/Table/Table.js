import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableHead from './TableHead';
import TableFoot from './TableFoot';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableHeadCell from './TableHeadCell';
import TableDataCell from './TableDataCell';
import TableContainer from './TableContainer';

export default function Table({
  bordered,
  children,
  className,
  fullWidth,
  hoverable,
  narrow,
  striped,
  ...props
}) {
  const tableClasses = classNames('table', className, {
    'is-bordered': bordered,
    'is-striped': striped,
    'is-narrow': narrow,
    'is-hoverable': hoverable,
    'is-fullwidth': fullWidth,
  });

  return (
    <table className={tableClasses} {...props}>
      {children}
    </table>
  );
}

Table.Head = TableHead;
Table.Foot = TableFoot;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeadCell = TableHeadCell;
Table.DataCell = TableDataCell;
Table.Container = TableContainer;

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  narrow: PropTypes.bool,
  hoverable: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Table.defaultProps = {
  className: undefined,
  children: null,
  bordered: false,
  striped: false,
  narrow: false,
  hoverable: false,
  fullWidth: false,
};
