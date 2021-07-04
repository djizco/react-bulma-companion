import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCardTitle({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('modal-card-title', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalCardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalCardTitle.defaultProps = {
  className: undefined,
  children: null,
  component: 'p',
};
