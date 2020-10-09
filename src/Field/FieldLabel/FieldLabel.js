import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function FieldLabel({
  children,
  className,
  size,
  ...props
}) {
  // Sizes
  const sizeMap = {
    small: 'is-small',
    normal: 'is-normal',
    medium: 'is-medium',
    large: 'is-large',
  };
  const isSize = size && sizeMap[size];

  const classes = classNames('field-label', className, isSize);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

FieldLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {
  className: undefined,
  children: null,
  size: undefined,
};
