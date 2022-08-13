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

import Element from '../Element';

export default function Table({
  bordered,
  children,
  className,
  fullwidth,
  hoverable,
  narrow,
  striped,
  ...props
}) {
  const classes = classNames('table', className, {
    'is-bordered': bordered,
    'is-striped': striped,
    'is-narrow': narrow,
    'is-hoverable': hoverable,
    'is-fullwidth': fullwidth,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
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
  component: PropTypes.elementType,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  narrow: PropTypes.bool,
  hoverable: PropTypes.bool,
  fullwidth: PropTypes.bool,
};

Table.defaultProps = {
  className: undefined,
  children: null,
  component: 'table',
  bordered: false,
  striped: false,
  narrow: false,
  hoverable: false,
  fullwidth: false,
};
