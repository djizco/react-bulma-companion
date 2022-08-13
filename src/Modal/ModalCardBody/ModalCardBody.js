import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function ModalCardBody({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-card-body', className);

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

ModalCardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

ModalCardBody.defaultProps = {
  className: undefined,
  children: null,
  component: 'section',
};
