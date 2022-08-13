import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../Element';

const sizes = ['small', 'medium', 'large'];
const sizeMap = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
};

export default function Delete({
  className,
  size,
  ...props
}) {
  const isSize = size && sizeMap[size];

  const classes = classNames('delete', className, isSize);

  return (
    <Element type="button" className={classes} {...props} />
  );
}

Delete.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(sizes),
};

Delete.defaultProps = {
  className: undefined,
  component: 'button',
  size: undefined,
};
