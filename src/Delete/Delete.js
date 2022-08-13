import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

export default function Delete({
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

  const classes = classNames('delete', className, isSize);

  return (
    <Element type="button" className={classes} {...props} />
  );
}

Delete.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Delete.defaultProps = {
  className: undefined,
  component: 'button',
  size: undefined,
};
