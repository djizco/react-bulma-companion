import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableFoot({
  children,
  className,
  ...props
}) {
  const tableFootClasses = classNames(className);

  return (
    <tfoot className={tableFootClasses} {...props}>
      {children}
    </tfoot>
  );
}

TableFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableFoot.defaultProps = {
  className: undefined,
  children: null,
};
