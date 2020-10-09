import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ModalClose({
  className,
  ...props
}) {
  const classes = classNames('modal-close', className);

  return (
    <button type="button" className={classes} {...props} />
  );
}

ModalClose.propTypes = {
  className: PropTypes.string,
};

ModalClose.defaultProps = {
  className: undefined,
};
