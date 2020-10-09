import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MessageBody({
  children,
  className,
  ...props
}) {
  const classes = classNames('message-body', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

MessageBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MessageBody.defaultProps = {
  className: undefined,
  children: null,
};
