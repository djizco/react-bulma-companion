import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCardTitle({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-card-title', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
}

ModalCardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalCardTitle.defaultProps = {
  className: undefined,
  children: null,
};
