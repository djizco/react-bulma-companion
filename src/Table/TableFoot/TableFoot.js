import React from 'react';
import PropTypes from 'prop-types';

export default function TableFoot({
  children,
  className,
  ...props
}) {
  return (
    <tfoot className={className} {...props}>
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
