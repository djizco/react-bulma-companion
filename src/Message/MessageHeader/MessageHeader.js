import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MessageHeader({
  children,
  className,
  ...props
}) {
  const classes = classNames('message-header', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

MessageHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MessageHeader.defaultProps = {
  className: undefined,
  children: null,
};
