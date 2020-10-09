import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalCardHead({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-card-head', className);

  return (
    <header className={classes} {...props}>
      {children}
    </header>
  );
}

ModalCardHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalCardHead.defaultProps = {
  className: undefined,
  children: null,
};
