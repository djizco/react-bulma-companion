import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({
  children,
  className,
  ...props
}) {
  return (
    <tbody className={className} {...props}>
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
