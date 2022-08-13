import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../Element';

export default function ModalClose({
  className,
  size,
  ...props
}) {
  const sizeMap = {
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const classes = classNames('modal-close', className, isSize);

  return (
    <Element type="button" className={classes} {...props} />
  );
}

ModalClose.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ModalClose.defaultProps = {
  className: undefined,
  component: 'button',
  size: undefined,
};
