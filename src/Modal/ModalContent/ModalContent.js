import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalContent({
  children,
  className,
  ...props
}) {
  const classes = classNames('modal-content', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalContent.defaultProps = {
  className: undefined,
  children: null,
};
