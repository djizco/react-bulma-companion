import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function ModalCard({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-card', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalCard.defaultProps = {
  className: undefined,
  children: null,
  component: 'div',
};
