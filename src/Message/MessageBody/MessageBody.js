import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function MessageBody({
  children,
  className,
  ...props
}) {
  const classes = classNames('message-body', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MessageBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MessageBody.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
