import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableContainer({
  children,
  className,
  ...props
}) {
  const tableContainerClasses = classNames('table-container', className);

  return (
    <div className={tableContainerClasses} {...props}>
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
