import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TableBody({
  children,
  className,
  ...props
}) {
  const tableBodyClasses = classNames(className);

  return (
    <tbody className={tableBodyClasses} {...props}>
      {children}
    </tbody>
  );
}

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableBody.defaultProps = {
  className: undefined,
  children: null,
};
