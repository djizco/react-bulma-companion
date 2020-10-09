import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableRow({
  children,
  className,
  selected,
  ...props
}) {
  const classes = classNames(className, {
    'is-selected': selected,
  });

  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  selected: PropTypes.bool,
};

TableRow.defaultProps = {
  className: undefined,
  children: null,
  selected: false,
};
