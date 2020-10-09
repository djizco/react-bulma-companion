import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalBackground({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-background', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

ModalBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalBackground.defaultProps = {
  className: undefined,
  children: null,
};
