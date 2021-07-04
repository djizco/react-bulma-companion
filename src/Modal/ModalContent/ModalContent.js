import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalContent({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('modal-content', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalContent.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
