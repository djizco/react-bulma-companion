import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCardHead({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('modal-card-head', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalCardHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalCardHead.defaultProps = {
  className: undefined,
  children: null,
  component: 'header',
};
