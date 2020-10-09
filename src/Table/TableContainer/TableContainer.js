import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableContainer({
  children,
  className,
  ...props
}) {
  const classes = classNames('table-container', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

TableContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableContainer.defaultProps = {
  className: undefined,
  children: null,
};
