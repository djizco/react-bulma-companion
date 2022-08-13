import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

const colors = [
  'primary', 'link', 'info', 'success', 'warning', 'danger',
  'white', 'black', 'light', 'dark',
];
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

export default function TableDataCell({
  children,
  className,
  color,
  narrow,
  selected,
  vcentered,
  ...props
}) {
  const isColor = color && colorMap[color];

  const classes = classNames(className, isColor, {
    'is-selected': selected,
    'is-narrow': narrow,
    'is-vcentered': vcentered,
  });

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

TableDataCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(colors),
  selected: PropTypes.bool,
  narrow: PropTypes.bool,
  vcentered: PropTypes.bool,
};

TableDataCell.defaultProps = {
  className: undefined,
  children: null,
  component: 'td',
  color: undefined,
  selected: false,
  narrow: false,
  vcentered: false,
};
