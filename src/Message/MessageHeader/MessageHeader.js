import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MessageHeader({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('message-header', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

MessageHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

MessageHeader.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
