import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCardFoot({
  children,
  className,
  component,
  ...props
}) {
  const Element = component;

  const classes = classNames('modal-card-foot', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalCardFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalCardFoot.defaultProps = {
  className: undefined,
  children: null,
  component: 'footer',
};
