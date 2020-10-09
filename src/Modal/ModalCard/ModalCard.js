import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCard({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-card', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

ModalCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalCard.defaultProps = {
  className: undefined,
  children: null,
};
