import React from 'react';
import PropTypes from 'prop-types';

export default function TableHead({
  children,
  className,
  ...props
}) {
  return (
    <thead className={className} {...props}>
      {children}
    </thead>
  );
}

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableHead.defaultProps = {
  className: undefined,
  children: null,
};
