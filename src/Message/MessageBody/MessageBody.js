import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MessageBody({
  children,
  className,
  ...props
}) {
  const messageBodyClasses = classNames('message-body', className);

  return (
    <div className={messageBodyClasses} {...props}>
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
