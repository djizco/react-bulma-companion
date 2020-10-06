import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableHeadCell({
  children,
  className,
  color,
  narrow,
  selected,
  vcentered,
  ...props
}) {
  // Colors
  const colorMap = {
    primary: 'is-primary',
    link: 'is-link',
    info: 'is-info',
    success: 'is-success',
    warning: 'is-warning',
    danger: 'is-danger',
    white: 'is-white',
    black: 'is-black',
    light: 'is-light',
    dark: 'is-dark',
  };
  const isColor = color && colorMap[color];

  const tableHeadCellClasses = classNames(className, isColor, {
    'is-selected': selected,
    'is-narrow': narrow,
    'is-vcentered': vcentered,
  });

  return (
    <th className={tableHeadCellClasses} {...props}>
      {children}
    </th>
  );
}

TableHeadCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
    'white',
    'black',
    'light',
    'dark',
  ]),
  selected: PropTypes.bool,
  narrow: PropTypes.bool,
  vcentered: PropTypes.bool,
};

TableHeadCell.defaultProps = {
  className: undefined,
  children: null,
  color: undefined,
  selected: false,
  narrow: false,
  vcentered: false,
};
