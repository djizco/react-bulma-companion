import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCardBody({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-card-body', className);

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}

ModalCardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalCardBody.defaultProps = {
  className: undefined,
  children: null,
};
