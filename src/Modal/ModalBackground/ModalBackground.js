import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalBackground({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('modal-background', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalBackground.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
