import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Number({
  children,
  className,
  ...props
}) {
  const classes = classNames('number', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Number.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Number.defaultProps = {
  className: undefined,
  children: null,
};
